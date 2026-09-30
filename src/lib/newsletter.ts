export const mailerLiteApiKey = process.env.MAILERLITE_API_KEY || "";
export const mailerLiteGroupId = process.env.MAILERLITE_GROUP_ID || "";
export const isNewsletterConfigured = Boolean(mailerLiteApiKey && mailerLiteGroupId);
