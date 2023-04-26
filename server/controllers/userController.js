const User = require("../model/userModel");

const registerUserData = async (req,res)=>{
    try {
        // Create a new user document with data from the request body
        const newUser = new User(req.body);

        // Save the user document to the database
        await newUser.save();

        // Send a response indicating that the user was created successfully
        res.status(201).send({message: "User created successfully"});
    } catch (error) {
        // Send an error response if there was a problem saving the user to the database
        console.log(error);
        res.status(500).send({error: "Could not create user"});
    }
}

module.exports = {
    registerUserData
}
