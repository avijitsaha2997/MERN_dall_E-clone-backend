import express from "express"
// import mongoose from "mongoose"
import Cors from "cors"
import * as dotenv from "dotenv"

dotenv.config();

const app = express();
const port = 8001;

app.use(express());
app.use(express.json({ limit: "50mb" }))
app.use(Cors());


app.get("/", async (req, res) => {
    res.send("Hello Avijit")
});

app.listen(port, () => console.log(`App is listening: ${port}`))