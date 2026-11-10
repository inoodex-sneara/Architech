async function run() {
  try {
    const res = await fetch('https://www.rehab-bd.org/members', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const text = await res.text();
    const links = [...text.matchAll(/href="([^"]*member[^"]*)"/gi)].map(m => m[1]);
    console.log('Member links:', links.slice(0, 10));
  } catch (e) {
    console.error(e);
  }
}
run();
