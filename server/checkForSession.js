module.exports = function(req, res, next) {
    if(!req.session.user) {
        console.log("creating new session");
        req.session.user = {
            username:"",
            id: "",
            loggedIn: false
        };
    }
    next();
    console.log(req.session);
    console.log(res.session);
};