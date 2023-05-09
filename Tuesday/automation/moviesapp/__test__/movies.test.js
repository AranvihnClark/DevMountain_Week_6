const { By, Builder, Browser, until, Key } = require('selenium-webdriver');

let driver;

beforeEach(async () => {
    driver = new Builder().forBrowser(Browser.CHROME).build();
});
  
afterEach(async () => {
    await driver.quit();
});

describe('Testing for the lab', () => {

    
    test('Does "watched" work?', async() => {
        // As always, we gotta get the website first.
        await driver.get('http://localhost:3000');
    
        // Second we need to add a movie to make sure we can test the other stuff.
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Encanto');
        await driver.findElement(By.css('button[type="submit"]')).click();

        // Now we can test if the checkoff works. We'll start by locating the checkbox and click it
        await driver.findElement(By.css('input[type="checkbox"]')).click();

        // We then can locate the message element and get its text.
        const message = await driver.wait(until.elementLocated(By.css('#message')), 1000);

        // Then we can run the actual test to see if it works
        expect(await message.getText()).toBe("Watched Encanto");
        });
    
        test('Does remove button show up?', async() => {
        // As always, we gotta get the website first.
        await driver.get('http://localhost:3000');

        // Second we need to add a movie to make sure we can test the other stuff.
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Encanto')
        await driver.findElement(By.css('button[type="submit"]')).click()

        // Now we can test if the remove button shows up. We will locate the button and wait.
        const removeButton = await driver.wait(until.elementLocated(By.css('.delete-btn')), 1000);

        // Now to check if it is, in fact, the remove button.
        expect(await removeButton.getText()).toBe('Remove');

    });

    test('Does delete work?', async() => {
        // As always, we gotta get the website first.
        await driver.get('http://localhost:3000');
    
        // Second we need to add a movie to make sure we can test the other stuff first.
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Encanto')
        await driver.findElement(By.css('button[type="submit"]')).click()
    
        // Now we can test if deleting a movie works. We will locate the button and click it.
        await driver.findElement(By.css('.delete-btn')).click();

        // Now to to confirm it was removed by first locating the message.
        const message = await driver.wait(until.elementLocated(By.css('#message')), 1000);

        // Then we confirm that the message indicates that the movie was removed.
        expect(await message.getText()).toBe("Encanto deleted!");
        });
});