const User = require("../model/userModel");

const registerUserData = async (req,res)=>{
    try {
        console.log("backend ",req.body)
        // Create a new user document with data from the request body
        const newUser = new User(req.body);

        // Save the user document to the database
        await newUser.save();

        // Send a response indicating that the user was created successfully
        res.status(200).json({message: "Your data submitted successfully",response:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Could not create user",response:false});
    }
}

const getUsersDetails = async (req,res) => {
    try {
        //finding all the users data
        const usersData = await User.find()

        //send response to frontend
        res.status(200).json(usersData)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    registerUserData,
    getUsersDetails
}
