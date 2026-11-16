const sharp = require('sharp');

async function inspectRow() {
  const { data, info } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Let's inspect x range of the badge
  // In the user's screenshot, the tab has a rounded corner on top-left:
  // "eta remove koro review sectione er imge theke"
  // Look at user screenshot media_1794804725569_d82a89dc.png:
  // It's a rounded tab sitting on the image with 4 avatars + 15+ circle!
  // Let's find exactly the bounds of that tab in client-testimonials-interior.png:
  for (let y = 280; y <= 345; y += 5) {
    let nonChair = [];
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Check if it's the tab or avatars
    }
  }

  // Let's inspect what the image is:
  console.log('Inspecting background texture around the tab...');
}

inspectRow();
