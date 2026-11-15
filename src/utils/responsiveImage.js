/**
 * Build responsive candidates for Unsplash images while preserving the original photo.
 * Local assets and non-Unsplash URLs intentionally return undefined.
 */
export function getUnsplashSrcSet(source, widths = [480, 768, 960], quality = 70) {
  if (typeof source !== "string" || !source.includes("images.unsplash.com/")) {
    return undefined;
  }

  try {
    const original = new URL(source);
    return widths
      .map((width) => {
        const candidate = new URL(original);
        candidate.searchParams.set("auto", "format");
        candidate.searchParams.set("fit", "crop");
        candidate.searchParams.set("w", String(width));
        candidate.searchParams.set("q", String(quality));
        return `${candidate.toString()} ${width}w`;
      })
      .join(", ");
  } catch {
    return undefined;
  }
}
