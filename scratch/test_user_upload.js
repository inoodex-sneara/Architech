const sharp = require('sharp');

async function testUserUpload() {
  const meta = await sharp('C:/Users/Inoodex/.gemini/antigravity/brain/c40f51bd-0131-450f-bbd9-394e04f0e9bd/.user_uploaded/media_1794804725569_d82a89dc.png').metadata();
  console.log('User upload metadata:', meta);

  // Let's sample colors around the badge in media_1794804725569_d82a89dc.png:
  const { data, info } = await sharp('C:/Users/Inoodex/.gemini/antigravity/brain/c40f51bd-0131-450f-bbd9-394e04f0e9bd/.user_uploaded/media_1794804725569_d82a89dc.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log('Top left pixel:', data[0], data[1], data[2]);
  console.log('Bottom right pixel:', data[(info.height * info.width - 1) * info.channels], data[(info.height * info.width - 1) * info.channels + 1], data[(info.height * info.width - 1) * info.channels + 2]);
}

testUserUpload();
