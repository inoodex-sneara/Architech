const sites = [
  'https://sunnydale.edu.bd',
  'https://www.sunnydale.edu.bd',
  'https://shaptak.com',
  'https://www.shaptak.com',
  'https://awrbd.com',
  'https://www.awrbd.com'
];

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
};

async function test() {
  for (const s of sites) {
    try {
      console.log('Testing', s);
      const res = await fetch(s, { headers, redirect: 'follow' });
      console.log(s, 'Status:', res.status);
      if (res.ok) {
        const text = await res.text();
        const imgs = text.match(/<img[^>]+>/gi) || [];
        console.log(`Found ${imgs.length} images on ${s}:`);
        imgs.slice(0, 10).forEach(img => console.log('  ', img));
      }
    } catch (e) {
      console.log('Failed', s, e.message);
    }
  }
}

test();
