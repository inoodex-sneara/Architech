const sharp = require('sharp');

async function findAvatarsY() {
  const { data, info } = await sharp('C:/Users/Inoodex/.gemini/antigravity/brain/c40f51bd-0131-450f-bbd9-394e04f0e9bd/scratch/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // In the user's screenshot media_1794806191203_640bd054.png:
  // There is a gold circle with '15+'.
  // Gold circle: r=180-220, g=150-180, b=80-120
  // Let's find every pixel in the gold circle:
  let goldPixels = [];
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 160 && r < 215 && g > 135 && g < 185 && b > 70 && b < 125) {
        goldPixels.push({ x, y });
      }
    }
  }

  // Filter for the circle cluster (radius ~ 15-20):
  console.log(`Total gold pixels: ${goldPixels.length}`);
  const ys = goldPixels.map(p => p.y);
  console.log(`Gold Y range: [${Math.min(...ys)}, ${Math.max(...ys)}]`);
  const xs = goldPixels.map(p => p.x);
  console.log(`Gold X range: [${Math.min(...xs)}, ${Math.max(...xs)}]`);
}

findAvatarsY();
