export type ContentStatus = "pending" | "confirmed";

export function isConfirmed(status: ContentStatus) {
  return status === "confirmed";
}
