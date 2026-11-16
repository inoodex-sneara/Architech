const sharp = require('sharp');

async function findExactBadge() {
  const { data, info } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Let's find the bounding box of the tab container:
  // In the user's screenshot, it's a pill/tab with rounded top-left corner.
  // The tab has a smooth grey-beige fill color with avatars inside.
  // Let's find rows and columns where this tab exists:
  let minX = 999, maxX = -1, minY = 999, maxY = -1;

  // Let's inspect each row from y = 250 to 393
  for (let y = 250; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Check for the tab background color:
      // In the screenshot media_1794804725569_d82a89dc.png, the tab background is around r=160-190, g=150-180, b=135-165
      // And the white circle borders are around 240-255
      // And gold 15+ circle is r=170-210, g=150-180, b=80-120
      const isGold = (r > 150 && r < 230 && g > 130 && g < 195 && b > 70 && b < 130);
      const isWhiteBorder = (r > 230 && g > 230 && b > 230 && x < 250 && y > 280 && y < 350);
      if (isGold || isWhiteBorder) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    }
  }

  console.log(`Badge bounds detected: X[${minX}, ${maxX}], Y[${minY}, ${maxY}]`);
}

findExactBadge();
