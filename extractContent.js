const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const files = fs.readdirSync('.').filter(file => file.match(/\.(html|htm|HTM|HTML)$/));

  for (const file of files) {
    const filePath = 'file://' + path.resolve(file);
    await page.goto(filePath);

    try {
      // Update selector if necessary
      const content = await page.$eval('#portuguese', el => el.innerText);

      // Save the content to a text file
      const outputFileName = path.basename(file, path.extname(file)) + '_pt.txt';
      fs.writeFileSync(outputFileName, content, 'utf8');
      console.log(`Extracted content saved to ${outputFileName}`);
    } catch (error) {
      console.error(`Failed to extract content from ${file}: ${error.message}`);
    }
  }

  await browser.close();
})();
