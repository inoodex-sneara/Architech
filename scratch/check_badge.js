const sharp = require('sharp');

async function checkBadge() {
  const { data, info } = await sharp('scratch/badge_area.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Let's print out what is at y=0, 20, 40, 60, 80, 100
  for (let y = 0; y < height; y += 10) {
    let row = '';
    for (let x = 0; x < width; x += 15) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Print character based on brightness / color
      if (r > 200 && g > 200 && b > 200) row += 'W'; // White
      else if (r > 150 && g > 130 && b < 100) row += 'G'; // Gold (15+)
      else if (Math.abs(r - g) < 15 && Math.abs(g - b) < 15 && r > 100 && r < 180) row += '#'; // Grey/beige tab
      else if (r < 50 && g < 50 && b < 50) row += '.'; // Dark
      else row += ' ';
    }
    console.log(`y=${y + 280}: ${row}`);
  }
}

checkBadge();
