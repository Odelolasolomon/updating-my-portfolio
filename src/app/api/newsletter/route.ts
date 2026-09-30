import { NextResponse } from "next/server";

import { isNewsletterConfigured, mailerLiteApiKey, mailerLiteGroupId } from "@/lib/newsletter";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inactiveStatuses = new Set(["unsubscribed", "bounced", "junk"]);
const mailerLiteBaseUrl = "https://connect.mailerlite.com/api";

type NewsletterRequest = {
  email?: unknown;
  consent?: unknown;
};

type MailerLiteSubscriber = {
  id: string;
  email: string;
  status?: string;
  groups?: Array<{ id: string; name?: string }>;
};

type MailerLiteResponse<T> = {
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
};

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status });
}

function formatMailerLiteDate(date = new Date()) {
  return date.toISOString().slice(0, 19).replace("T", " ");
}

async function mailerLiteFetch<T>(path: string, init?: RequestInit) {
  const response = await fetch(`${mailerLiteBaseUrl}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${mailerLiteApiKey}`,
      ...init?.headers
    }
  });

  const result = await response.json().catch(() => null) as MailerLiteResponse<T> | null;
  return { response, result };
}

async function getExistingSubscriber(email: string) {
  const { response, result } = await mailerLiteFetch<MailerLiteSubscriber>(`/subscribers/${encodeURIComponent(email)}`);

  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(result?.message || "MailerLite subscriber lookup failed.");
  }

  return result?.data || null;
}

export async function POST(request: Request) {
  let body: NewsletterRequest | null = null;

  try {
    body = await request.json() as NewsletterRequest;
  } catch {
    return jsonError("Please submit a valid newsletter request.", 400);
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!emailPattern.test(email)) {
    return jsonError("Please enter a valid email address.", 400);
  }

  if (body.consent !== true) {
    return jsonError("Please confirm newsletter consent before subscribing.", 400);
  }

  if (!isNewsletterConfigured) {
    return jsonError("Newsletter signup is temporarily unavailable. Please try again later.", 503);
  }

  try {
    const existingSubscriber = await getExistingSubscriber(email);
    const existingStatus = existingSubscriber?.status?.toLowerCase();

    if (existingStatus && inactiveStatuses.has(existingStatus)) {
      return jsonError("This email cannot be subscribed automatically. Please resubscribe through MailerLite or contact Solomon directly.", 409);
    }

    const { response, result } = await mailerLiteFetch<MailerLiteSubscriber>("/subscribers", {
      method: "POST",
      body: JSON.stringify({
        email,
        groups: [mailerLiteGroupId],
        opted_in_at: formatMailerLiteDate()
      })
    });

    if (!response.ok) {
      const providerMessage = response.status === 422 ? "Please check the email address and try again." : "Subscription could not be completed by the newsletter provider.";
      return jsonError(providerMessage, response.status);
    }

    const subscriber = result?.data;
    const status = subscriber?.status?.toLowerCase();

    if (status && inactiveStatuses.has(status)) {
      return jsonError("This email is not active in MailerLite and was not reactivated automatically.", 409);
    }

    return NextResponse.json({
      ok: true,
      message: response.status === 201 ? "Subscription confirmed. Please check your inbox for future updates." : "You are already on the newsletter list. Your subscription details are up to date."
    }, { status: response.status === 201 ? 201 : 200 });
  } catch {
    return jsonError("Newsletter signup could not be completed right now. Please try again later.", 502);
  }
}
