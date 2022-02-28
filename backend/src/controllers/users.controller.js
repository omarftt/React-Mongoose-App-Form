const usersController = {};

const User = require("../models/usersModel");

usersController.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
}

usersController.createUsers = async (req,res) => {
    try{
        const {username,email} = req.body;
        const newUser = new User({
            username: username,
            email: email
        })
        await newUser.save();
        res.json({message:'User created'})
    } catch(e){
        console.error("Usuario repetido");
    }
        
}

module.exports = usersController;
