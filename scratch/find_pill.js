const sharp = require('sharp');

async function findExactPill() {
  const { data, info } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Let's print out what is at y=300 to y=330 across all x
  // In the user's screenshot, each avatar has a distinct white border ring!
  // White border ring: r>230, g>230, b>230.
  // Let's find all pixels with r > 230, g > 230, b > 230 between y=280 and y=360:
  let whitePixels = [];
  for (let y = 280; y <= 360; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 220 && g > 220 && b > 215) {
        whitePixels.push({ x, y });
      }
    }
  }

  let minX = Math.min(...whitePixels.map(p => p.x));
  let maxX = Math.max(...whitePixels.map(p => p.x));
  let minY = Math.min(...whitePixels.map(p => p.y));
  let maxY = Math.max(...whitePixels.map(p => p.y));

  console.log(`White border bounds: X[${minX}, ${maxX}] Y[${minY}, ${maxY}], total white pixels: ${whitePixels.length}`);
}

findExactPill();
