import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // Create text SVG overlay
  const textSvg = `
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: white; font-size: 52px; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
        .subtitle { fill: #a1a1aa; font-size: 26px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
      </style>
      <text x="50%" y="380" text-anchor="middle" class="title">Lumary</text>
      <text x="50%" y="430" text-anchor="middle" class="subtitle">Professional Screen Recording for macOS</text>
    </svg>
  `;

  // Load and process background image
  const background = await sharp(join(publicDir, 'images', 'image1.png'))
    .resize(width, height, { fit: 'cover' })
    .modulate({ brightness: 0.4 })
    .blur(3)
    .toBuffer();

  // Load and resize logo
  const logo = await sharp(join(publicDir, 'images', 'logo-256.png'))
    .resize(140, 140)
    .toBuffer();

  // Create the composite image
  const result = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 10, g: 10, b: 11, alpha: 1 }
    }
  })
    .composite([
      { input: background, gravity: 'center' },
      { input: logo, top: 180, left: Math.floor((width - 140) / 2) },
      { input: Buffer.from(textSvg), top: 0, left: 0 }
    ])
    .png()
    .toFile(join(publicDir, 'images', 'og-image.png'));

  console.log('OG image generated successfully!');
}

generateOgImage().catch(console.error);
