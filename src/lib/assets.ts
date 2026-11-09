/**
 * URL for an image or video in public/images/.
 *
 * Usage:
 *   import { assetUrl } from "@/lib/assets";
 *   <Image src={assetUrl("hero.jpg")} ... />
 */
/** "/<repo>" on <org>.github.io, empty on the site's own domain. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetUrl(filename: string): string {
  return `${BASE_PATH}/images/${filename}`;
}

/**
 * Brand-colored skeleton placeholder for use with next/image
 * `placeholder="blur"`. Renders a paper-2 (#ECE8DD) tone behind the image
 * while it loads, then Next swaps in the real bytes.
 */
export const ASSET_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNFQ0U4REQiLz48L3N2Zz4=";
