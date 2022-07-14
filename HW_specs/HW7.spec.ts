import {Builder, WebDriver, By, WebElement, until, Actions, Origin} from "selenium-webdriver";
import {Key} from "selenium-webdriver";

describe("onlinerTests", () => {

    it("visitOnlinerTest", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.onliner.by");
        let cons = await driver.findElement(By.css('[class="b-main-navigation__text"]'));
        await cons.click();
        await driver.close();
    });

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
        await driver.close();
    });

    it("BucketTest", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://wwww.onliner.by");
        let topMenu: WebElement = await driver.findElement(By.css('[class="fast-search__input"]'));
        await driver.wait(until.elementIsVisible(topMenu), 10000);
        await topMenu.click();
        await topMenu.sendKeys("iphone");
        await driver.switchTo().frame(1);
        await driver.wait(until.elementLocated(By.xpath('//*[@href="https://catalog.onliner.by/mobile/apple/iphone13pro"]')), 10000);
        let url: WebElement = await driver.findElement(By.xpath('//*[@href="https://catalog.onliner.by/mobile/apple/iphone13pro"]'));
        await driver.wait(until.elementLocated(By.xpath('//*[@href="https://catalog.onliner.by/mobile/apple/iphone13pro"]')), 10000);
        await url.click();
        let bucket: WebElement = await driver.findElement(By.xpath('//*[@class="button-style button-style_base-alter button-style_primary product-aside__button product-aside__button_narrow product-aside__button_cart button-style_expletive"]'));
        await driver.wait(until.elementLocated(By.xpath('//*[@class="button-style button-style_base-alter button-style_primary product-aside__button product-aside__button_narrow product-aside__button_cart button-style_expletive"]')), 10000);
        await bucket.click();
        await driver.wait(until.elementLocated(By.xpath('//*[@class="button-style button-style_another button-style_base-alter product-recommended__button"]')), 100000);
        let result: WebElement = driver.findElement(By.xpath('//*[@class="button-style button-style_another button-style_base-alter product-recommended__button"]'));
        await result.click();
        await driver.close();
    });

    it("currencyTest", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://wwww.onliner.by");
        let menuKey: WebElement = await driver.findElement(By.css('[class="_u js-currency-amount"]'));
        await driver.wait(until.elementIsVisible(menuKey), 10000);
        await menuKey.click();
        let buyDollars: WebElement = await driver.findElement(By.css('[for="buy"]'));
        await buyDollars.click();
        await driver.wait(until.elementLocated(By.css('[for="buy"]')), 10000);
        let typeDollars: WebElement = await driver.findElement(By.css('[id="amount-in"]'))
        await typeDollars.clear();
        await typeDollars.sendKeys("500");
        await driver.wait(until.elementLocated(By.css('[id="amount-in"]')), 10000);
        let getRes: WebElement = await driver.findElement(By.css('[class="result to-be-removed"]'));
        console.log(await getRes.getText());
        await driver.close();
    });

    it("bmwCoupeTest", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://wwww.onliner.by");
        await driver.wait(until.elementLocated(By.linkText("Автобарахолка")), 10000);
        let av: WebElement = await driver.findElement(By.linkText("Автобарахолка"));
        await av.click();
        let firm3: WebElement = await driver.findElement(By.xpath('(//div[@class="input-style__faux"])[4]'));
        await driver.wait(until.elementLocated(By.xpath('(//div[@class="input-style__faux"])[4]')), 2000);
        await driver.executeScript("arguments[0].click()", firm3);
        let BMW: WebElement = await driver.findElement(By.css('[class="dropdown-style__item dropdown-style__item_brand dropdown-style__item_brand_bmw-alter"]'));
        await driver.wait(until.elementLocated(By.css('[class="dropdown-style__item dropdown-style__item_brand dropdown-style__item_brand_bmw-alter"]')), 2000)
        await BMW.click();
        let coupe: WebElement = await driver.findElement(By.xpath('(//div[@class="input-style__faux"])[9]'));
        await driver.wait(until.elementLocated(By.xpath('(//div[@class="input-style__faux"])[9]')), 2000);
        await driver.executeScript("arguments[0].click()", coupe);
        let check0: WebElement = await driver.findElement(By.xpath('(//div[@class="i-checkbox__faux"])[246]'));
        await driver.wait(until.elementLocated(By.xpath('(//div[@class="i-checkbox__faux"])[246]')), 2000);
        await driver.executeScript("arguments[0].click()", check0);
        let check1: WebElement = await driver.findElement(By.xpath('(//div[@class="i-checkbox__faux"])[262]'));
        await driver.wait(until.elementLocated(By.xpath('(//div[@class="i-checkbox__faux"])[262]')), 2000);
        await driver.executeScript("arguments[0].click()", check1);
        let check2: WebElement = await driver.findElement(By.xpath('(//div[@class="i-checkbox__faux"])[256]'));
        await driver.wait(until.elementLocated(By.xpath('(//div[@class="i-checkbox__faux"])[256]')), 2000);
        await driver.executeScript("arguments[0].click()", check2);
        let check3: WebElement = await driver.findElement(By.xpath('(//div[@class="i-checkbox__faux"])[251]'));
        await driver.wait(until.elementLocated(By.xpath('(//div[@class="i-checkbox__faux"])[251]')), 2000);
        await driver.executeScript("arguments[0].click()", check3);
        await driver.wait(until.elementLocated(By.xpath('(//div[@class="vehicle-form__link vehicle-form__link_primary-alter vehicle-form__link_middle vehicle-form__link_noreflex"])[3]')), 50000);
        let check4: WebElement = await driver.findElement(By.xpath('(//*[@class="vehicle-form__link vehicle-form__link_primary-alter vehicle-form__link_middle vehicle-form__link_noreflex"])[3]'));
        await driver.executeScript("arguments[0].click()", check4);
        await driver.wait(until.elementLocated(By.xpath('(//*[@class="vehicle-form__price vehicle-form__price_condensed"])[1]')), 20000);
        let check5: WebElement = await driver.findElement(By.xpath('(//*[@class="vehicle-form__price vehicle-form__price_condensed"])[1]'));
        console.log(await check5.getText());
        await driver.close();
    });
});

