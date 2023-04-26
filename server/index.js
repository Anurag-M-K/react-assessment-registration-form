const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/connection");
const userRouter = require("./routes/userRouter")


//connecting frontent
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    methods: 'GET,PUT,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  }));

app.use(bodyParser.json())

db(()=>{
    try {
        console.log("Database connection successfully");
    } catch (error) {
        console.log("Database connection failed")
    }
})

app.use("/api",userRouter)
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})