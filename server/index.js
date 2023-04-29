const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/connection");
const userRouter = require("./routes/userRouter")


app.use(cors({
    origin: 'http://localhost:5173'
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