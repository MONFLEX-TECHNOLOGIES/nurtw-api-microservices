const jsonwebtoken = require("jsonwebtoken");
const { secretKey } = require("../../configs").webToken;

function tokenMiddleware() {
    return async (req, res, next) => {
        const token = req.body.token || req.params.token || req.headers["x-token"]
        if (token) {
            const validToken = await verifyToken(token);
            if (validToken) {
                req.user = validToken;
                next()
            } else {
                res.status(403).json({ ok: false, message: "You are not authorized to perfom this operation" })
            }
        } else {
            res.status(401).json({ ok: false, message: "Token not found" })
        }
    }
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, secretKey, (err, validToken) => {
            if (err) {
                reject(err)
            } else {
                resolve(validToken)
            }
        })
    })
}

module.exports.tokenMiddleware = tokenMiddleware;