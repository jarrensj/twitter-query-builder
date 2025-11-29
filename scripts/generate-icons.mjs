import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const svgPath = join(rootDir, 'public/icons/icon.svg');
const svgBuffer = readFileSync(svgPath);

const sizes = [192, 512];

async function generateIcons() {
  for (const size of sizes) {
    const outputPath = join(rootDir, `public/icons/icon-${size}.png`);
    
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`Generated: icon-${size}.png`);
  }
  
  // Also generate a favicon
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(rootDir, 'public/favicon.png'));
  
  console.log('Generated: favicon.png');
  
  // Generate apple-touch-icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(rootDir, 'public/apple-touch-icon.png'));
  
  console.log('Generated: apple-touch-icon.png');
}

generateIcons().catch(console.error);
