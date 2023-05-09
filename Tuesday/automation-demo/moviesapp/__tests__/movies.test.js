const { Builder, Browser, By, until, Key } = require("selenium-webdriver");

let driver;

// Build a new driver for each test
beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

// Quit a driver after each test
afterEach(async () => {
  await driver.quit();
});

describe('Testing the movies app', () => {

    test("Can add a movie", async () => {
        // Navigate to the web app
        await driver.get("http://localhost:3000");

        // Find the input and type in the movie
        await driver.findElement(By.css('input[name = "movieTitle"]')).sendKeys('Encanto')

        // Find the add button and click it
        await driver.findElement(By.css('button[type = "submit"]')).click();

        // Wait until the movie appears on the list
        const addedMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 1000);

        // Check if movie is on the list
        expect(await addedMovie.getText()).toBe("Encanto");
    });
})