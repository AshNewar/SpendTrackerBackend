import express from "express"
import connectDB from "./connect/connect.js";
import dotenv from "dotenv";
import router from "./router/router.js";
import bodyParser from "body-parser";
import cors from 'cors'

dotenv.config();


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json())

app.use(cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.get('/', (req, res) => {
    res.send("hello")
})
app.use(router)

connectDB();
app.listen(8000, () => {
    console.log("SERVER STARTED!")
})