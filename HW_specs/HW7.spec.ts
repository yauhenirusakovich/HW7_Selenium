import {Builder, WebDriver, By, WebElement, until, Actions, Origin} from "selenium-webdriver";
import {Key} from "selenium-webdriver";
import {
    onlinerBy, mainNavigation, inputSearch, closeSearch, fastSearchInput, iphone13Pro, cartButton, recommendedButton,
    currencyAmount, BuyDollars, dollarsAmount, cash, ab, bmwFirm, dropdown1, checkbox1, checkbox2, checkbox3, checkbox4,
    checkbox5, bmwCoupe, moneyAmount
} from "./locators";

describe("onlinerTests",  () => {
    let driver: WebDriver = new Builder().forBrowser("chrome").build();

    beforeEach(async () => {
        await driver.manage().window().maximize();
        await driver.get(onlinerBy);
    });

    afterEach(async () => {
        await driver.close();
    });
    it("visitOnlinerTest", async () => {
        let cons = await driver.findElement(mainNavigation);
        await cons.click();
    });

    it("SearchBarTest", async () => {
        let topMenu: WebElement = await driver.findElement(inputSearch);
        await topMenu.click();
        await (topMenu.sendKeys("iphone"));
        await driver.switchTo().frame(1);
        let close: WebElement = await driver.findElement(closeSearch);
        await close.click();
        // setTimeout(async () => {
        //     await close.click()
        // }, 5000);
    });

    it("BucketTest", async () => {
        let topMenu: WebElement = await driver.findElement(fastSearchInput);
        await driver.wait(until.elementIsVisible(topMenu), 10000);
        await topMenu.click();
        await topMenu.sendKeys("iphone");
        await driver.switchTo().frame(1);
        await driver.wait(until.elementLocated(iphone13Pro), 10000);
        let url: WebElement = await driver.findElement(iphone13Pro);
        await driver.wait(until.elementLocated(iphone13Pro), 10000);
        await url.click();
        let bucket: WebElement = await driver.findElement(cartButton);
        await driver.wait(until.elementLocated(cartButton), 10000);
        await bucket.click();
        await driver.wait(until.elementLocated(recommendedButton), 100000);
        let result: WebElement = driver.findElement(recommendedButton);
        await result.click();
    });

    it("currencyTest", async () => {
        let menuKey: WebElement = await driver.findElement(currencyAmount);
        await driver.wait(until.elementIsVisible(menuKey), 10000);
        await menuKey.click();
        let buyDollars: WebElement = await driver.findElement(BuyDollars);
        await buyDollars.click();
        await driver.wait(until.elementLocated(BuyDollars), 10000);
        let typeDollars: WebElement = await driver.findElement(dollarsAmount);
        await typeDollars.clear();
        await typeDollars.sendKeys("500");
        await driver.wait(until.elementLocated(dollarsAmount), 10000);
        let getRes: WebElement = await driver.findElement(cash);
        console.log('550$ in BYN=============', await getRes.getText());
    });

    it("bmwCoupeTest", async () => {
        await driver.wait(until.elementLocated(ab), 10000);
        let av: WebElement = await driver.findElement(ab);
        await av.click();
        let firm3: WebElement = await driver.findElement(bmwFirm);
        await driver.wait(until.elementLocated(bmwFirm), 2000);
        await driver.executeScript("arguments[0].click()", firm3);
        let BMW: WebElement = await driver.findElement(dropdown1);
        await driver.wait(until.elementLocated(dropdown1), 2000)
        await BMW.click();
        let coupe: WebElement = await driver.findElement(checkbox1);
        await driver.wait(until.elementLocated(checkbox1), 2000);
        await driver.executeScript("arguments[0].click()", coupe);
        let check0: WebElement = await driver.findElement(checkbox2);
        await driver.wait(until.elementLocated(checkbox2), 2000);
        await driver.executeScript("arguments[0].click()", check0);
        let check1: WebElement = await driver.findElement(checkbox3);
        await driver.wait(until.elementLocated(checkbox3), 2000);
        await driver.executeScript("arguments[0].click()", check1);
        let check2: WebElement = await driver.findElement(checkbox4);
        await driver.wait(until.elementLocated(checkbox4), 2000);
        await driver.executeScript("arguments[0].click()", check2);
        let check3: WebElement = await driver.findElement(checkbox5);
        await driver.wait(until.elementLocated(checkbox5), 2000);
        await driver.executeScript("arguments[0].click()", check3);
        await driver.wait(until.elementLocated(bmwCoupe), 50000);
        let check4: WebElement = await driver.findElement(bmwCoupe);
        await driver.executeScript("arguments[0].click()", check4);
        await driver.wait(until.elementLocated(moneyAmount), 20000);
        let check5: WebElement = await driver.findElement(moneyAmount);
        console.log('BMWCoupe price=========', await check5.getText());
    });
});

