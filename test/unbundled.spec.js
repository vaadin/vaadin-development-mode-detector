const puppeteer = require('puppeteer');
const exec = require('child_process').exec;

describe('unbundled mode', () => {
  let browser;
  let page;
  let polymerServeUrl;

  // Run polymer serve
  beforeAll(done => {
    const polymerServeProcess = exec('polymer serve');
    polymerServeProcess.stdout.on('data', data => {
      polymerServeUrl = data.match(/reusable components: (.*)/)[1];
      done();
    });
  });

  // Run headless Chrome
  beforeEach(async() => {
    browser = await puppeteer.launch({
      // debug mode, uncomment this to see the browser
      // headless: false
    });
    page = await browser.newPage();
  });


  it('should detect the development mode', async() => {
    await page.goto(`${polymerServeUrl}test/`);
    await page.waitForSelector('b');
    const text = await page.$eval('b', el => el.textContent);
    expect(text).toEqual('development');
  });

  // Close headless Chrome
  afterEach(async() => {
    await browser.close();
  });

  // polymer serve will be terminated automatically with the --forceExit flag of jest
});
