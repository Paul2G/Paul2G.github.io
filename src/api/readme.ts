import { marked } from "marked";
import type { ProjectReadme } from "./../types/portfolio";
import { localReadmes } from "./data/projects/readmes";

export interface ResolvedReadme {
  /** The raw markdown source text. */
  markdown: string;
  /** The external URL the markdown came from, if any. */
  url?: string;
}

/**
 * Resolves a project's README to its raw markdown source string.
 * Supports either a locally saved markdown file or a raw markdown URL.
 */
export async function resolveReadme(
  readme: ProjectReadme | undefined
): Promise<ResolvedReadme | null> {
  if (!readme) return null;

  if (readme.source === "local" && readme.localFile) {
    const markdown = localReadmes[readme.localFile];
    if (!markdown) {
      throw new Error(
        `Local readme "${readme.localFile}" not found in the readmes registry.`
      );
    }
    return { markdown };
  }

  if (readme.source === "url" && readme.url) {
    const res = await fetch(readme.url);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch readme from ${readme.url}: ${res.status} ${res.statusText}`
      );
    }
    return { markdown: await res.text(), url: readme.url };
  }

  return null;
}

/**
 * Renders a markdown string to HTML using marked.
 */
export function renderMarkdown(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string;
}
