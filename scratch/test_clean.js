const sharp = require('sharp');

async function testCleanCrop() {
  // Let's inspect y=0 to 275
  // And let's see what is to the right of the badge in the original image (x > 220, y > 280)
  const { data, info } = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // In the user's screenshot media_1794804725569_d82a89dc.png:
  // The badge is on a tab with rounded corners.
  // Let's see: what if we inpaint or extend the floor/chair texture down to y=393?
  // Or what if we crop from top: 0, height: 275, and resize to 640x786 with Lanczos3?
  // Let's test both!

  await sharp('public/images/client-testimonials-interior.png')
    .extract({ left: 0, top: 0, width: 320, height: 275 })
    .resize(640, 786, { fit: 'cover', position: 'top' })
    .toFile('scratch/clean_cropped_640x786.png');

  console.log('Saved scratch/clean_cropped_640x786.png');
}

testCleanCrop();
