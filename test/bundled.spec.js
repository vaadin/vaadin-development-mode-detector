const puppeteer = require('puppeteer');
const exec = require('child_process').exec;

jest.setTimeout(10000);

function polymerBuild() {
  return new Promise((resolve, reject) => {
    exec(
      'polymer build --entrypoint test/index.html --bundle',
      {},
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
  });
}

describe('bundled mode', () => {
  let browser;
  let page;
  let polymerServeUrl;

  // Run polymer build then polymer serve
  beforeAll(done => {
    polymerBuild().then(() => {
      const polymerServeProcess = exec('polymer serve build/default');
      polymerServeProcess.stdout.on('data', data => {
        polymerServeUrl = data.match(/applications: (.*)/)[1];
        done();
      });
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

  it('should detect the production mode', async() => {
    await page.goto(`${polymerServeUrl}/test/`);
    await page.waitForSelector('b');
    const text = await page.$eval('b', el => el.textContent);
    expect(text).toEqual('production');
  });

  // Close headless Chrome
  afterEach(async() => {
    await browser.close();
  });

  // polymer serve will be terminated automatically with the --forceExit flag of jest
});
