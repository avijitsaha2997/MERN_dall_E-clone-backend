import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"


dotenv.config();

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }))

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes)


app.get("/", async (req, res) => {
    res.send("Hello Avijit saha")
});

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log(`App is listening: ${port}`))
    } catch (error) {
        console.log(error)
    }

}

startServer();

// TfinKHwIGKLOAvmQ