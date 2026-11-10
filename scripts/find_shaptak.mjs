async function run() {
  try {
    const res = await fetch('https://www.rehab-bd.org/members', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const text = await res.text();
    const matches = text.match(/href="([^"]*(?:shaptak|087)[^"]*)"/i);
    console.log('Match on members page:', matches);
  } catch (e) {
    console.error(e);
  }
}
run();
