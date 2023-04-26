const mongoose = require("mongoose");

const db = async ()=>{
    try {
        const connectionParams = {
            useNewUrlParser : true,
            useUnifiedTopology:true,
        }
       await mongoose.connect("mongodb://localhost:27017/userData",connectionParams)
        .then(()=>{
            console.log('database connected successfully');
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = db;