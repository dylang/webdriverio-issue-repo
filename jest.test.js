describe('simple test', () => {
    test('open pages', async() => {
        const { remote } = require('webdriverio')

        const browser = await remote({
            automationProtocol: 'devtools',
            capabilities: {
                browserName: 'chrome'
            },
            logLevel: 'error'
        })

        console.log('HIT CONTROL-C TO KILL Jest.');
        console.log('It should also kill the browser, but is not.');

        await browser.url('https://webdriver.io/docs/gettingstarted.html')
        while (true) {
            const links = await browser.$$('.toc a');
            const randomLink = links[Math.floor(Math.random() * links.length - 1)];
            await randomLink.click();
        }

        await browser.deleteSession()
    });
});
