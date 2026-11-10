async function run() {
  try {
    const res = await fetch('https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7njKR6BsUpq4R2Dyod9VwTVToGljJPoOsS6eJJe0GpDkiyxxrrIkhpJRmW8_BHV7SNdWdG-gfaiood5hxp0ubFia5vOcZTMW95cjtB-XlAWAv27PlO8FOB4QxAce6', {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      redirect: 'manual'
    });
    console.log('Redirect status:', res.status, res.headers.get('location'));
  } catch(e) {
    console.error(e);
  }
}
run();
