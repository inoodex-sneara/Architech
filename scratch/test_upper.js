const sharp = require('sharp');

async function testUpper() {
  const { data, info } = await sharp('scratch/upper_part.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log('upper_part info:', info);

  // Check if any avatar white circles or gold pixels exist in upper_part.png
  let whiteCount = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    if (data[i] > 230 && data[i+1] > 230 && data[i+2] > 230) {
      whiteCount++;
    }
  }

  console.log('White pixels in upper_part.png:', whiteCount);
}

testUpper();
