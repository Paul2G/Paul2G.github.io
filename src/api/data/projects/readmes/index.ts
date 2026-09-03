import resumaker from "./resumaker.md?raw";
import reactAdminTemplate from "./react-admin-template.md?raw";

/**
 * Registry of locally saved project README files, keyed by filename.
 * Add each new local markdown file here as a `?raw` import.
 */
export const localReadmes: Record<string, string> = {
  "resumaker.md": resumaker,
  "react-admin-template.md": reactAdminTemplate,
};
