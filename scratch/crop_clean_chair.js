const sharp = require('sharp');

async function cropCleanChair() {
  // Original backup in scratch:
  const input = 'C:/Users/Inoodex/.gemini/antigravity/brain/c40f51bd-0131-450f-bbd9-394e04f0e9bd/scratch/client-testimonials-interior.png';

  // The badge starts at y=278.
  // So y=0 to y=270 is 100% pristine, showing the entire chair, plant, vase, cabinet and wall!
  // Let's crop from y=0 to y=270, width=320:
  await sharp(input)
    .extract({ left: 0, top: 0, width: 320, height: 270 })
    .resize(800, 960, {
      kernel: 'lanczos3',
      fit: 'cover'
    })
    .png({ quality: 95 })
    .toFile('public/images/client-testimonials-interior.png');

  console.log('Clean chair image saved at 800x960!');
}

cropCleanChair();
