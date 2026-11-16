const sharp = require('sharp');

async function inspectUpper() {
  const metadata = await sharp('public/images/client-testimonials-interior.png').metadata();
  console.log('metadata:', metadata);

  // Let's crop y from 0 to 280 (which is above the badge!)
  await sharp('public/images/client-testimonials-interior.png')
    .extract({ left: 0, top: 0, width: 320, height: 280 })
    .toFile('scratch/upper_part.png');

  // Let's crop the badge specifically:
  // In the user's screenshot, the badge has a height of around 60-70px.
  // Let's check where the badge starts:
  const { data, info } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Let's find the top edge of the grey rounded tab.
  // In the user screenshot, the top of the tab has a rounded corner.
  // Let's scan y from 260 to 320 at x=50, 100, 150:
  for (let y = 260; y <= 310; y++) {
    const idx = (y * 320 + 100) * 4;
    console.log(`y=${y} at x=100: rgb(${data[idx]}, ${data[idx+1]}, ${data[idx+2]})`);
  }
}

inspectUpper();
