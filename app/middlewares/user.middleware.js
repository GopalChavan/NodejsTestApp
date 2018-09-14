var User = require('../models/user');
var bcrypt = require('bcryptjs');

exports.validateEmail = async function(req, res, next){
    try{
        let existingUser = await User.findOne({email: req.body.email})
        if(existingUser){
            return res.status(200).send("User already exists with the email ID");
        }
    } catch(e){
        res.status(500).send(e.message);
    }
    next();
}

exports.validatePassword = function(req, res, next){
    let passwordIsValid = bcrypt.compareSync(req.body.password, req.user.password);
    if (!passwordIsValid){
      return res.status(401).send({ auth: false, token: null });   
    }
    next();
}

exports.newUser = async function(req, res, next){
    try{
        req.user = await User.create({
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, 8),
            email: req.body.email,
        })
    }catch(e){
        res.status(500).send(e.message);
    }
    next();
}

exports.findUser = async function(req, res, next){
    try{
        let user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(404).send("No User Found");
        }
        req.user = user;
    }catch(e){
        res.status(500).send(e.message);
    }
    next();
}