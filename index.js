const logProcessErrors = require('log-process-errors');

logProcessErrors({
    exitOn: ['uncaughtException', 'unhandledRejection'],
    level: {
        multipleResolves: 'silent'
    }
});

const { remote } = require('webdriverio')

let browser;

(async () => {
    browser = await remote({
        automationProtocol: 'devtools',
        capabilities: {
            browserName: 'chrome'
        },
        logLevel: 'error'
    })

    await browser.url('https://webdriver.io/docs/gettingstarted.html')

    console.log('HIT CONTROL-C TO KILL THIS.');
    console.log('Frequent chance of infinite recursion in checkPendingNavigations.js.');
    console.log('The stack dump takes a couple minutes to show up.');

    while (true) {
        const links = await browser.$$('.toc a');
        const randomLink = links[Math.floor(Math.random() * links.length - 1)];
        await randomLink.click();
    }

    await browser.deleteSession()
})().catch(async (e) => {
    console.error(e)
    await browser.deleteSession()
})
