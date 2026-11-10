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

async function download(url, filename) {
  try {
    const res = await fetch(url, { headers, redirect: 'follow' });
    if (!res.ok) {
      console.log(`Failed ${res.status}: ${url}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    // Check if html
    const str = buf.slice(0, 50).toString('utf8');
    if (str.includes('<!doctype html') || str.includes('<html')) {
      console.log(`HTML response, not image: ${url}`);
      return false;
    }
    if (buf.length < 150) {
      console.log(`Too small: ${buf.length} bytes: ${url}`);
      return false;
    }
    fs.writeFileSync(path.join(outDir, filename), buf);
    console.log(`SUCCESS saved ${filename} (${buf.length} bytes) from ${url}`);
    return true;
  } catch (e) {
    console.log(`Error ${url}: ${e.message}`);
    return false;
  }
}

async function searchWiki(query) {
  try {
    const res = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&format=json`, { headers });
    const data = await res.json();
    if (data?.query?.search?.[0]) {
      const title = data.query.search[0].title;
      console.log(`Found wiki file for "${query}": ${title}`);
      const infoRes = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`, { headers });
      const infoData = await infoRes.json();
      const pages = infoData?.query?.pages;
      for (const p in pages) {
        if (pages[p]?.imageinfo?.[0]?.url) {
          return pages[p].imageinfo[0].url;
        }
      }
    }
  } catch (e) {
    console.log(`Wiki search failed for ${query}: ${e.message}`);
  }
  return null;
}

async function run() {
  // Test Sanmar static images
  const sanmarUrls = [
    'https://mysanmar.com/images/static/logo.svg',
    'https://mysanmar.com/images/static/fav.svg',
    'https://mysanmar.com/images/static/logo.png',
  ];
  for (const u of sanmarUrls) {
    const ext = u.endsWith('.svg') ? 'svg' : 'png';
    if (await download(u, `sanmar.${ext}`)) break;
  }

  // Rangs
  const rangsWiki = await searchWiki('Rangs Group');
  console.log('Rangs wiki url:', rangsWiki);
  if (rangsWiki) {
    await download(rangsWiki, rangsWiki.endsWith('.svg') ? 'rangs-properties.svg' : 'rangs-properties.png');
  } else {
    await download('https://seeklogo.com/images/R/rangs-logo-341990.png', 'rangs-properties.png');
  }

  // Sunnydale
  const sunnyUrls = [
    'https://sunnydale.edu.bd/wp-content/uploads/2021/04/logo.png',
    'https://sunnydale.edu.bd/images/logo.png',
    'https://sunnydale.edu.bd/assets/images/logo.png',
  ];
  for (const u of sunnyUrls) {
    if (await download(u, 'sunnydale.png')) break;
  }

  // Shaptak
  const shaptakUrls = [
    'https://shaptak.com/wp-content/uploads/2021/04/logo.png',
    'https://shaptak.com/images/logo.png',
    'https://shaptak.com/assets/img/logo.png',
  ];
  for (const u of shaptakUrls) {
    if (await download(u, 'shaptak.png')) break;
  }

  // Check Sanmar JS bundle for image URLs
  try {
    const jsRes = await fetch('https://mysanmar.com/static/js/main.d65812ad.js', { headers });
    if (jsRes.ok) {
      const text = await jsRes.text();
      const matches = text.match(/static\/media\/[^"']+\.(png|svg|webp)/g);
      console.log('Sanmar media matches in JS:', matches);
      if (matches) {
        for (const m of matches) {
          if (m.toLowerCase().includes('logo') || m.toLowerCase().includes('sanmar')) {
            const ext = m.endsWith('.svg') ? 'svg' : 'png';
            await download(`https://mysanmar.com/${m}`, `sanmar.${ext}`);
          }
        }
      }
    }
  } catch (e) {
    console.log('Error inspecting sanmar js:', e.message);
  }
}

run();
