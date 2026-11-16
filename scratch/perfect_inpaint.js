const sharp = require('sharp');

async function cleanInpaint() {
  const { data, info } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.from(data);

  // The tab box:
  // x: 10 to 220
  // y: 275 to 355
  // We want to replace the tab box with the natural continuation of:
  // - Top edge (the warm chair fabric / leather, y=260..274)
  // - Right edge (the natural shadow under the chair, x=220..270)
  // - Bottom edge (the floor / rug texture, y=356..380)

  // Notice: The chair's shadow is horizontal!
  // From x=220 to 300, y=280..340, the shadow is a soft horizontal gradient:
  // Let's compute average horizontal profile of the shadow on the right side:
  const shadowProfile = [];
  for (let y = 275; y <= 355; y++) {
    let rSum = 0, gSum = 0, bSum = 0, count = 0;
    for (let x = 220; x <= 260; x++) {
      const idx = (y * width + x) * channels;
      rSum += data[idx];
      gSum += data[idx+1];
      bSum += data[idx+2];
      count++;
    }
    shadowProfile[y] = [rSum / count, gSum / count, bSum / count];
  }

  // Now, inpaint from x=10 to x=220:
  for (let y = 275; y <= 355; y++) {
    const [sr, sg, sb] = shadowProfile[y];

    for (let x = 0; x <= 220; x++) {
      const idx = (y * width + x) * channels;

      // Distance from top (chair) and bottom (floor)
      const topT = Math.max(0, (y - 275) / 80); // 0 at top, 1 at bottom

      // Top pixel at same x:
      const topIdx = (274 * width + x) * channels;
      const tr = data[topIdx], tg = data[topIdx+1], tb = data[topIdx+2];

      // Bottom pixel at same x:
      const botY = Math.min(height - 1, 356);
      const botIdx = (botY * width + x) * channels;
      const br = data[botIdx], bg = data[botIdx+1], bb = data[botIdx+2];

      // Blend top, bottom, and horizontal shadow profile:
      // Near y=275, match top chair edge
      // Near y=355, match bottom floor
      // In the middle, match the warm dark shadow (sr, sg, sb) with slight x variation
      const verticalWeight = (topT < 0.2) ? (1 - topT / 0.2) : (topT > 0.8 ? (topT - 0.8) / 0.2 : 0);
      
      let finalR, finalG, finalB;
      if (topT < 0.25) {
        // Chair lower lip
        const factor = (topT / 0.25);
        finalR = tr * (1 - factor) + sr * factor;
        finalG = tg * (1 - factor) + sg * factor;
        finalB = tb * (1 - factor) + sb * factor;
      } else if (topT > 0.75) {
        // Floor blend
        const factor = (topT - 0.75) / 0.25;
        finalR = sr * (1 - factor) + br * factor;
        finalG = sg * (1 - factor) + bg * factor;
        finalB = sb * (1 - factor) + bb * factor;
      } else {
        // Soft shadow
        finalR = sr;
        finalG = sg;
        finalB = sb;
      }

      // Add a tiny bit of natural grain (±2) so it matches organic photo grain
      const grain = ((x * 17 + y * 31) % 5) - 2;

      out[idx] = Math.max(0, Math.min(255, Math.round(finalR + grain)));
      out[idx+1] = Math.max(0, Math.min(255, Math.round(finalG + grain)));
      out[idx+2] = Math.max(0, Math.min(255, Math.round(finalB + grain)));
      out[idx+3] = 255;
    }
  }

  // Save at original size:
  await sharp(out, { raw: { width, height, channels } })
    .png()
    .toFile('scratch/clean_interior_320.png');

  // Upscale cleanly to high resolution 640x786 with Lanczos3:
  await sharp(out, { raw: { width, height, channels } })
    .resize(640, 786, { kernel: 'lanczos3' })
    .png({ quality: 95, compressionLevel: 8 })
    .toFile('scratch/clean_interior_640.png');

  console.log('Clean images generated successfully!');
}

cleanInpaint();
