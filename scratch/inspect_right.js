const sharp = require('sharp');

async function inspectRightSide() {
  const { data } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let y = 260; y <= 390; y += 10) {
    let row = [];
    for (let x = 200; x < 320; x += 20) {
      const idx = (y * 320 + x) * 4;
      row.push(`x=${x}: (${data[idx]},${data[idx+1]},${data[idx+2]})`);
    }
    console.log(`y=${y}: ${row.join(' | ')}`);
  }
}

inspectRightSide();
