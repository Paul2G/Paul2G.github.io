import resumaker from "./resumaker.md?raw";

/**
 * Registry of locally saved project README files, keyed by filename.
 * Add each new local markdown file here as a `?raw` import.
 */
export const localReadmes: Record<string, string> = {
  "resumaker.md": resumaker,
};
