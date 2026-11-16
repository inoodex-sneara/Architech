const sharp = require('sharp');

async function inpaint() {
  const { data, info } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const outData = Buffer.from(data);

  // Inpaint region:
  // x: 0 to 200
  // y: 278 to 350
  // Above y=278: rows 250..277 are the beautiful warm chair edge and shadows.
  // To the right: x=200..250 is the natural dark warm shadow of the chair base:
  // r ~ 105, g ~ 80, b ~ 58.
  // Below y=350: y=350..392 is the floor / carpet with smooth warm tone.

  // Let's do a smooth, realistic inpainting:
  // For each pixel (x, y) inside the badge area (x < 200, y >= 278 && y <= 350):
  for (let y = 278; y <= 350; y++) {
    for (let x = 0; x < 200; x++) {
      const idx = (y * width + x) * channels;
      
      // Interpolate naturally from the texture above (y=265..277)
      // and texture to the right (x=205..220)
      const topDist = y - 277;
      const bottomDist = 351 - y;
      const rightDist = 200 - x;

      // Sample top source (chair edge):
      // The chair edge above y=277 has a subtle gradient across x
      const topY = 276;
      const topIdx = (topY * width + x) * channels;

      // Sample right source (shadow):
      const rightX = Math.min(width - 1, 205 + Math.floor((x / 200) * 15));
      const rightIdx = (y * width + rightX) * channels;

      // Sample bottom source:
      const botY = 352;
      const botIdx = (botY * width + x) * channels;

      // Weighted combination:
      const wTop = 1.0 / Math.pow(topDist + 1, 1.2);
      const wBot = 1.0 / Math.pow(bottomDist + 1, 1.2);
      const wRight = 1.0 / Math.pow(rightDist + 1, 1.2);
      const totalW = wTop + wBot + wRight;

      for (let c = 0; c < 3; c++) {
        const val = (outData[topIdx + c] * wTop + outData[botIdx + c] * wBot + outData[rightIdx + c] * wRight) / totalW;
        outData[idx + c] = Math.round(val);
      }
      outData[idx + 3] = 255;
    }
  }

  // Smooth the boundary with a small bilateral filter pass:
  await sharp(outData, { raw: { width, height, channels } })
    .toFile('scratch/inpainted_result.png');

  console.log('Saved scratch/inpainted_result.png');
}

inpaint();
