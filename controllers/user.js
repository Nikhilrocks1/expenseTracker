const User = require('../models/user');

function isstringinvalid(string){
    if(string == undefined || string.length === 0){
        return true
    }
    else{
        return false
    }
}

exports.postSignup = async(req, res, next) => {
    try{
        const {name, email, password} = req.body;
        if (isstringinvalid(name) || isstringinvalid(email) || isstringinvalid(password)){
            return res.status(400).json({err: "something is missing!!"})
        }

           await User.create({name, email, password})
           res.status(200).json({message:'successfully create new user'});
           
    }catch(err) {
        res.status(500).json(err);
    }
}

exports.postLogin = async(req, res, next) => {
    try{
        const{email, password} = req.body;
        if (isstringinvalid(email) || isstringinvalid(password)){
            return res.status(400).json({message:"Email or Password is missing!!"})
        }
        const user = await User.findAll({ where: {email}})
        if(user.length > 0){
            
                if (user[0].password === password){
                    res.status(200).json({success: true, message: "User logged in successfully"})   
                }
                else{
                    return res.status(400).json({success: false, message: "Password is incorrect"})
                }
            
        }else{
            return res.status(404).json({success: false, message: "User does not exist"})
        } 
    }catch(err){
        res.status(500).json({message: err, success: false})
    }
}