const sharp = require('sharp');

async function match() {
  const badge = await sharp('C:/Users/Inoodex/.gemini/antigravity/brain/c40f51bd-0131-450f-bbd9-394e04f0e9bd/.user_uploaded/media_1794804725569_d82a89dc.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const main = await sharp('public/images/client-testimonials-interior.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log('badge info:', badge.info);
  console.log('main info:', main.info);
}

match();
