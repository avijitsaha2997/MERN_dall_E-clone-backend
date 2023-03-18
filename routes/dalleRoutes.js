import * as dotenv from "dotenv"
import express from "express"
import { Configuration, OpenAIApi } from "openai";


dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY
})


const opeai = new OpenAIApi(configuration);

router.route("/").get((req, res) => [
    res.send("HEllo from Dall e ai")
]);

export default router;