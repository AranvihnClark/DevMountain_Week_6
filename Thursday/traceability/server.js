require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static(`${__dirname}/public`))
app.use(cors());

const { ROLLBAR_ACCESS_TOKEN } = process.env;

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: `${ROLLBAR_ACCESS_TOKEN}`,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// pictures = [{
//     src: `https://images.unsplash.com/photo-1575252663512-b25714ec27f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80`,
//     alt: `balloon-1`
// }];

app.get(`/pictures`, (req, res) => {
    rollbar.info(`Server did something...~`);
    try {
        res.status(200).send(pictures);
    }
    catch (err) {
        rollbar.critical(`Pictures couldn't be found!`);
        console.log(err);
    }
});

app.get(`/home`, (req, res) => {
    try {
        fakeFunction(definite);
        console.log(`This shouldn't work.`);
    }
    catch (err) {
        rollbar.warn(`Function doesn't exist to get to Home.`);
        console.log(err);
    }
})

app.get(`/about`, (req, res) => {
    try {
        rollbar.log(`Attempting to display About section.`);
        res.sendStatus(200);
    }
    catch (err) {
        rollbar.warn(`About section didn't display... Overriding protocol.`);
        console.log(err);
    }
})

app.get(`/close`, (req, res) => {
    try {
        rollbar.log(`Attempting to close About section.`);
        res.sendStatus(200);
    }
    catch (err) {
        rollbar.warn(`About section didn't close.`);
        console.log(err);
    }
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Running on server 5050.`));