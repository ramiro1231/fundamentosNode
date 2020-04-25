const puppeteer = require('puppeteer');

/*
(async () => {
    //Codigo
    console.log('Lanzamos navegador');
    const browser = await puppeteer.launch( {headless: false});

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    console.log('Cerramos');
    browser.close();
    console.log('navegador cerrado');
    
})();*/

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});
   
    await browser.close();
  })();