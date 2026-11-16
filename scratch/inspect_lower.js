const sharp = require('sharp');

async function inspectLower() {
  const { data } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let y = 330; y <= 392; y++) {
    const idx = (y * 320 + 100) * 4;
    console.log(`y=${y} at x=100: rgb(${data[idx]}, ${data[idx+1]}, ${data[idx+2]})`);
  }
}

inspectLower();
