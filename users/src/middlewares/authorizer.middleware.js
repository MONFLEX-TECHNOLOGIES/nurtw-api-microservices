function authorizer(expectedUserTypeArr) {
    return (req, res, next) => {
        if (expectedUserTypeArr.includes(req.user.userType)) {
            next()
        } else {
            res.status(401).json({ ok: false, message: 'You are not authorised to carryout this operation' });
        }
    }
}
module.exports.authorizer = authorizer;