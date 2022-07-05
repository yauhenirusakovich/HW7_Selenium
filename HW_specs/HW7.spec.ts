import {Builder, WebDriver, By, WebElement, until} from "selenium-webdriver";
import {Key} from "selenium-webdriver";


describe ("visitOnlinerSuit", async () => {
    it("visitOnlinerTest", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.onliner.by");
        let cons = await driver.findElement(By.id("widget-6-1"));
        await cons.click();
    })
});

describe ("SearchBarSuit", async () => {
    it("SearchBarTest", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.onliner.by");
        let topMenu: WebElement = await driver.findElement(By.css('[class="fast-search__input"]'));
        await topMenu.click();
        await (topMenu.sendKeys("iphone"));
        await driver.switchTo().frame(1);
        let close: WebElement = await driver.findElement(By.xpath('//*[@class="search__close"]'));
        setTimeout(async () => {
            await close.click()
        }, 5000);
    });
});
    describe("testBucket", async () => {
        it("BucketTest", async  () => {
            let driver: WebDriver = await new Builder().forBrowser("chrome").build();
            await driver.get("https://wwww.onliner.by");
            let topMenu: WebElement = await driver.findElement(By.css('[class="fast-search__input"]'));
            await topMenu.click();
            await topMenu.sendKeys("iphone");
            await driver.switchTo().frame(1);
            let url: WebElement = await driver.findElement(By.xpath('//*[@href="https://catalog.onliner.by/mobile/apple/iphone13pro"]'));
            await setTimeout(async () => {
                await url.click();
            }, 15000);
            let bucket: WebElement = await driver.findElement(By.xpath('//*[@href="data-shop-id="707"]'));
            setTimeout(async () => {
                await bucket.click
            }, 5000);

    });
});
