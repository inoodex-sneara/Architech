const sharp = require('sharp');

async function verify() {
  const { data, info } = await sharp('scratch/inpainted_result.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, channels } = info;

  // Let's check if any gold pixels (15+) remain
  let goldCount = 0;
  for (let y = 250; y < 380; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 150 && r < 230 && g > 130 && g < 195 && b > 70 && b < 130) {
        goldCount++;
      }
    }
  }

  console.log('Remaining gold pixels in inpainted image:', goldCount);
}

verify();
