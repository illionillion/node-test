"use strict";
const webdriver=require('selenium-webdriver');
const {Builder,By,until}=webdriver;

const capabilities = webdriver.Capabilities.chrome();
capabilities.set('chromeOptions', {
    args: [
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        `--window-size=1980,1200`
        // other chrome options
    ]
});
(async ()=>{
    const driver=await new Builder().withCapabilities(capabilities).build();
    await driver.get('https://github.com/illionillion');
    
})();
