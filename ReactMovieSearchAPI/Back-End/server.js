const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const likesRouter = require("");
const dislikesRouter = require("");

app.use("/likes", likesRouter);
app.use("/dislikes", dislikesRouter);


app.listen(PORT, () => {
    console.log(`Movie Port Listening Party: ${PORT}`);
})