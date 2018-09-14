exports.login = async function(req, res){
    res.status(200).send({ auth: true, token: req.token });
}

exports.signup = async function(req, res){
    res.status(201).send({user: req.user, token: req.token});
}

exports.userProfile = async function(req, res){
    let token = req.headers['x-access-token'] || req.query.token || req.body.token;
    res.status(200).send({user:req.userId, token: token});
}
