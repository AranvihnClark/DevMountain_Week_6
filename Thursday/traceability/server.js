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

pictures = [{
    src: `https://images.unsplash.com/photo-1575252663512-b25714ec27f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80`,
    alt: `balloon-1`
}]

app.get(`/pictures`, (req, res) => {
    rollbar.info(`Server did something...~`);
    try {
        if (2 === 1) {
            res.status(200).send(pictures)
        }
    }
    catch (err) {
        rollbar.critical(`Pictures couldn't be found!`);
        console.log(err);
    }
})

app.listen(4000, () => console.log(`Running on server 4000.`));