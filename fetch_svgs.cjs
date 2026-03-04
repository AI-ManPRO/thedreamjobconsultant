const https = require('https');

https.get('https://topmate.io/', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const svgs = data.match(/<svg[^>]*>.*?<\/svg>/gsi);
        if (svgs) {
            svgs.forEach((svg, i) => {
                console.log(`\n--- SVG ${i + 1} ---`);
                console.log(svg.substring(0, 200) + (svg.length > 200 ? '...' : ''));
            });
        } else {
            console.log('No svgs found');
        }
    });
}).on('error', (err) => {
    console.error(err);
});
