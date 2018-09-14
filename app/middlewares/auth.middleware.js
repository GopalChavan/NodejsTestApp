var secrets = require('../../secret');
var jwt = require('jsonwebtoken');

exports.authenticateUser = async function(req, res, next){
    let token = req.headers['x-access-token'] || req.query.token || req.body.token;
    if (!token){
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }
    try{
        var decoded = await jwt.verify(token, secrets.secretKey)
        req.userId = decoded.id
    }catch(e){
        if(e.name == 'TokenExpiredError'){
            res.status(401).send({ auth: false, message: 'Invalid Token, Authentication Failed' });
        }
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    next()
}

exports.generateToken = function(req, res, next){
    req.token = jwt.sign({ id: req.user._id }, secrets.secretKey, {
        expiresIn: secrets.tokenExpiryTime // expires in 24 hours
    });
    next();
}

