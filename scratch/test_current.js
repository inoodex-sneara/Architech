const sharp = require('sharp');

async function testCurrent() {
  const { data, info } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log('Current dimensions:', width, 'x', height);

  // In the user's screenshot, the 4 avatar circles and the 15+ circle are there.
  // In the 640x786 image:
  // The badge would be at y ~ 280*2 = 560 to 350*2 = 700.
  // Let's check if there are white circle pixels (r>230, g>230, b>230) in y=500..750, x=50..400:
  let whiteCount = 0;
  for (let y = 500; y < 750; y++) {
    for (let x = 50; x < 450; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 230 && g > 230 && b > 230) {
        whiteCount++;
      }
    }
  }

  console.log('White circle pixels in 500..750:', whiteCount);
}

testCurrent();
