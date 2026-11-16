const sharp = require('sharp');

async function findExactCircles() {
  const { data, info } = await sharp('C:/Users/Inoodex/.gemini/antigravity/brain/c40f51bd-0131-450f-bbd9-394e04f0e9bd/scratch/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log('Original backup size:', width, 'x', height);

  // Let's find ALL white pixels in the image:
  let whiteMap = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 230 && g > 230 && b > 230) {
        whiteMap.push({ x, y });
      }
    }
  }

  // Filter for clusters in the bottom half:
  const bottomWhites = whiteMap.filter(p => p.y > 200);
  const xs = bottomWhites.map(p => p.x);
  const ys = bottomWhites.map(p => p.y);

  console.log(`Bottom white pixels count: ${bottomWhites.length}`);
  console.log(`X range: [${Math.min(...xs)}, ${Math.max(...xs)}]`);
  console.log(`Y range: [${Math.min(...ys)}, ${Math.max(...ys)}]`);

  // Let's print x distribution:
  let buckets = {};
  for (const p of bottomWhites) {
    const bx = Math.floor(p.x / 20) * 20;
    buckets[bx] = (buckets[bx] || 0) + 1;
  }
  console.log('X buckets:', buckets);
}

findExactCircles();
