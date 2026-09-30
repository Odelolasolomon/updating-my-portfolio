"use client";

import { Send } from "lucide-react";
import { useMemo, useState, type ChangeEvent } from "react";

import { FormField } from "@/components/ui/FormField";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const enquiryTypes = [
  "AI/ML engineering",
  "AI agents and LLM systems",
  "Research collaboration",
  "Technical leadership",
  "Consulting or advisory",
  "Other professional enquiry"
] as const;

type FormValues = {
  name: string;
  email: string;
  organization: string;
  enquiryType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  organization: "",
  enquiryType: "",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`${values.enquiryType || "Portfolio enquiry"} from ${values.name || "Portfolio visitor"}`);
    const body = encodeURIComponent([
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.organization ? `Organisation: ${values.organization}` : "Organisation: Not provided",
      `Enquiry type: ${values.enquiryType || "Not selected"}`,
      "",
      values.message
    ].join("\n"));
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [values]);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  }

  function validate() {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.enquiryType) nextErrors.enquiryType = "Please choose an enquiry type.";
    if (!values.message.trim()) nextErrors.message = "Please include a message.";
    else if (values.message.trim().length < 20) nextErrors.message = "Please add a little more context so I can respond well.";
    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    window.location.href = mailtoHref;
    window.setTimeout(() => setStatus("success"), 500);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="min-w-0 space-y-5" aria-describedby="contact-form-status">
      <div className="grid min-w-0 gap-5 md:grid-cols-2">
        <FormField
          label="Full name"
          name="name"
          autoComplete="name"
          placeholder="Enter your full name"
          value={values.name}
          onChange={(event: ChangeEvent<HTMLInputElement>) => updateField("name", event.target.value)}
          error={errors.name}
          required
        />
        <FormField
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email address"
          value={values.email}
          onChange={(event: ChangeEvent<HTMLInputElement>) => updateField("email", event.target.value)}
          error={errors.email}
          required
        />
      </div>
      <FormField
        label="Organisation"
        name="organization"
        autoComplete="organization"
        placeholder="Company, lab or institution (optional)"
        value={values.organization}
        onChange={(event: ChangeEvent<HTMLInputElement>) => updateField("organization", event.target.value)}
      />
      <label htmlFor="enquiry-type" className="block text-sm font-medium text-portfolio-charcoal">
        Enquiry type
        <select
          id="enquiry-type"
          name="enquiryType"
          value={values.enquiryType}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => updateField("enquiryType", event.target.value)}
          aria-invalid={Boolean(errors.enquiryType)}
          required
          className={cn(
            "focus-ring mt-2 w-full rounded-portfolio border border-portfolio-grey bg-white px-4 py-3 text-sm text-portfolio-charcoal",
            errors.enquiryType && "border-portfolio-orange"
          )}
        >
          <option value="">Select an enquiry type</option>
          {enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
        {errors.enquiryType ? <span className="mt-2 block text-sm text-portfolio-orange">{errors.enquiryType}</span> : null}
      </label>
      <FormField
        label="Message"
        name="message"
        multiline
        rows={7}
        placeholder="Tell me about the opportunity, research idea, technical challenge or collaboration goal."
        value={values.message}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => updateField("message", event.target.value)}
        error={errors.message}
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-portfolio bg-portfolio-blue px-5 py-2.5 text-sm font-semibold text-white shadow-portfolio-soft transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <Send size={17} /> {status === "loading" ? "Opening email client..." : "Open Email Draft"}
      </button>
      <div id="contact-form-status" aria-live="polite" className="min-h-6 text-sm leading-6">
        {status === "success" ? <p className="text-portfolio-blue">Your email client should now contain a prepared message. Please review and send it from there.</p> : null}
        {status === "error" ? <p className="text-portfolio-orange">Please fix the highlighted fields before creating the email draft.</p> : null}
        {status === "idle" || status === "loading" ? <p className="text-portfolio-slate">This form creates an email draft using your device&apos;s mail client.</p> : null}
      </div>
    </form>
  );
}



