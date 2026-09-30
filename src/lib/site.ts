export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || "http://localhost:3000";

  try {
    return new URL(rawUrl.endsWith("/") ? rawUrl : `${rawUrl}/`);
  } catch {
    return new URL("http://localhost:3000");
  }
}
