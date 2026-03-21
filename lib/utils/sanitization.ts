/**
 * Basic sanitization function to prevent XSS in simple text fields.
 * For more complex needs, consider using a library like DOMPurify.
 */
export function sanitizeInput(input: string): string {
  if (!input) return "";
  
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();
}

/**
 * Strips HTML tags entirely from a string.
 */
export function stripHtml(input: string): string {
  if (!input) return "";
  return input.replace(/<[^>]*>?/gm, "").trim();
}
