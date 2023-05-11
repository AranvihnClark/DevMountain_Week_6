require(`dotenv`).config()
const express = require(`express`);

const app = express();
const cors = require(`cors`);

app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => console.log(`Running on server 4000.`));