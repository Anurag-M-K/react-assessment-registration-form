const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
    },
    dob:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true,
    },
    govIdType:{
        type:String
    },
    govId:{
        type:String,
    },
    guardianCountry:{
        type:String,
    },
    guardianName:{
        type:String,
    },
    email:{
        type:String,
    },
    emergencyNo:{
        type:Number
    },
    address:{
        type:String,
    },
    country:{
        type:String,
    },
    state:{
        type:String,
    },
    city:{
        type:String,
    },
    pincode:{
        type:String,
    },
    occupation:{
        type:String,
    },
    religion:{
        type:String,
    },
    maritalStatus:{
        type:String,
    },
    bloodGroup:{
        type:String,
    },
    nationality:{
        type:String
    }

})

const User = mongoose.model("user",userSchema)

module.exports = User;