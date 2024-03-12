import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const port = 3000;
const API_URL = "https://financialmodelingprep.com/api/v3/profile/";
const envVar = dotenv.config();
const API_KEY = process.env.API_KEY; // Replace with your own personal API Key or the app won't work.

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        res.render("index.ejs");
    } catch (error) {
        res.render("index.ejs", { data: error });
    }
});


app.post("/search", async (req, res) => {
    try {
        const data = await axios.get(API_URL + req.body.name + "?" + API_KEY);
        console.log(data)
        res.render("index.ejs", { data: JSON.stringify(data.data[0].price) });
    } catch (error) {
        //
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

