import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '../public/clients');

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Inoodex/1.0',
  'Accept': '*/*',
};

async function dl(url, filename) {
  try {
    const res = await fetch(url, { headers, redirect: 'follow' });
    if (!res.ok) {
      console.log(`Failed ${res.status}: ${url}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 100) return false;
    fs.writeFileSync(path.join(outDir, filename), buf);
    console.log(`SUCCESS: ${filename} (${buf.length} bytes) from ${url}`);
    return true;
  } catch (e) {
    console.log(`Error ${url}: ${e.message}`);
    return false;
  }
}

async function run() {
  // 1. Sunnydale
  await dl('https://sdslive.edu-smart.info/sunnydale.logo.png', 'sunnydale.png');

  // 2. Rangs properties svg rename/verify
  const rangsPngPath = path.join(outDir, 'rangs-properties.png');
  if (fs.existsSync(rangsPngPath)) {
    const content = fs.readFileSync(rangsPngPath, 'utf8');
    if (content.startsWith('<svg') || content.includes('<svg')) {
      fs.writeFileSync(path.join(outDir, 'rangs-properties.svg'), content);
      fs.unlinkSync(rangsPngPath);
      console.log('Saved rangs-properties.svg from SVG content');
    }
  }

  // 3. AWR
  const awrUrls = [
    'https://www.awr.com.bd/images/logo.png',
    'https://www.awr.com.bd/assets/images/logo.png',
    'https://awr-developments.com.bd/images/logo.png',
    'https://awr-developments.com.bd/assets/images/logo.png',
    'http://www.rehab-bd.org/member_images/087.jpg',
  ];
  for (const u of awrUrls) {
    if (await dl(u, 'awr.png')) break;
  }

  // 4. Shaptak
  const shaptakUrls = [
    'http://www.shaptak.com/images/logo.png',
    'http://www.shaptak.com/img/logo.png',
    'http://www.shaptak.com/assets/images/logo.png',
    'http://www.rehab-bd.org/member_images/087.jpg',
  ];
  for (const u of shaptakUrls) {
    if (await dl(u, 'shaptak.png')) break;
  }
}

run();
