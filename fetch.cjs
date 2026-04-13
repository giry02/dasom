const http = require('http'); 
http.get('http://www.dasomsnc.co.kr/html/sub_company04.html', (res) => { 
  let html = ''; 
  res.on('data', (c) => html += c); 
  res.on('end', () => {
    const matches = html.match(/<img[^>]*src=["']([^"']*)["'][^>]*>/gi);
    console.log(matches ? matches.join('\n') : 'no images');
  });
});
