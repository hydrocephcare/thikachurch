// One-off image optimization: converts the heavy portfolio PNG/JPG screenshots
// to WebP at a reasonable quality, dramatically cutting page weight (one source
// file was 2MB as a PNG). Run manually with `node scripts/optimize-images.mjs`
// when adding new large images - this isn't part of the build pipeline.

import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { resolve, extname, basename } from "node:path";

const ASSETS_DIR = resolve(process.cwd(), "src/assets");
const MIN_SIZE_BYTES = 80_000; // only bother converting non-trivial files

async function main() {
  const files = await readdir(ASSETS_DIR);
  const targets = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

  for (const file of targets) {
    const srcPath = resolve(ASSETS_DIR, file);
    const { size } = await stat(srcPath);
    if (size < MIN_SIZE_BYTES) continue;

    const outName = `${basename(file, extname(file))}.webp`;
    const outPath = resolve(ASSETS_DIR, outName);

    await sharp(srcPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);

    const { size: newSize } = await stat(outPath);
    console.log(`${file} (${(size / 1024).toFixed(0)}KB) -> ${outName} (${(newSize / 1024).toFixed(0)}KB)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
