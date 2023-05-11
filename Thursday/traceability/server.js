require(`dotenv`).config()
const express = require(`express`);

const app = express();
const cors = require(`cors`);

app.use(express.static(`${__dirname}/public`))


const { ROLLBAR_ACCESS_TOKEN } = process.env;

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: `${ROLLBAR_ACCESS_TOKEN}`,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.listen(4000, () => console.log(`Running on server 4000.`));