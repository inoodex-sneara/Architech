const sharp = require('sharp');
const path = require('path');

async function analyze() {
  const { data, info } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Let's inspect where the badge is.
  // In the user screenshot, there's a badge with 4 circles and '15+' in gold.
  // Let's find gold-ish pixels: r around 180-210, g around 150-180, b around 80-120
  let minX = width, maxX = 0, minY = height, maxY = 0;
  let found = 0;

  for (let y = 150; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Gold badge: 15+ circle
      if (r > 150 && r < 220 && g > 130 && g < 190 && b > 60 && b < 120) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
        found++;
      }
    }
  }

  console.log(`Found ${found} gold pixels. Bounds: X[${minX}, ${maxX}] Y[${minY}, ${maxY}]`);
}

analyze();
