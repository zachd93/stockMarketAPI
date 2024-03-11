import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const port = 3000;
const API_URL = "https://financialmodelingprep.com/api/v3/";
const API_KEY = dotenv.config();
console.log(process.env.API_KEY);

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const data = await API_URL + "search?query=";
    res.render("index.ejs", { data: data.data });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

