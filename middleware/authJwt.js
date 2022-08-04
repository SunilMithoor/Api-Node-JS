const db = require('../models')
const message = require('../constants/message.js');
const apiResponse = require('../response/apiResponse.js');
const serverCode = require('../response/serverCode.js');
const jwt = require("jsonwebtoken");
const user = db.user;

const verifyToken = (req, res, next) => {

    try{

    // let token = req.session.token;
    // let token= req.body.token || req.query.token ||
    //     req.headers['x-access-token'] || req.headers['auth-token']
    let token = req.header('Authorization');
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length).trimLeft();
    }
    console.log("verifyToken :: ", token)

    if (!token) {
        return res.status(serverCode.forbidden).send(
            apiResponse.failureJsonObject(res.statusCode, false, message.no_token_provided)
        );
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            let errorData = {
                message: err.message,
                expiredAt: err.expiredAt
            }
            console.log("Token Error :: ", errorData)
            return res.status(serverCode.unAuthorized).send(
                apiResponse.failureJsonObject(res.statusCode, false, message.unAuthorized,errorData)
            );

        }
        req.userId = decoded.id;
        next();
    });
            
}
catch (err) {
    return res.status(serverCode.badRequest).send(
        apiResponse.failureJsonObject(res.statusCode, false, message.invalid_token,err)
    );
}
};

const authJwt = {
    verifyToken
};
module.exports = authJwt;