const jwt = require('jsonwebtoken');
const constants = require('./constants');

module.exports.authMiddleware = (req, res, next) => {
    const token = req.header('accessToken');

    if(!token){
        return res.sendStatus(401);
    }
    try{
        const result = jwt.verify(token, constants.ACCESS_TOKEN_SECRET);
        return 200;
    } catch (e) {
        return res.sendStatus(403);
    }
}