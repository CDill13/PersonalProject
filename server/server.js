require("dotenv").config();
const express = require("express");
const session = require("express-session");
const chalk = require("chalk");
const massive = require("massive");
const bodyParser = require("body-parser");
const ctrlr = require("./controller");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const axios = require("axios");
const swal = require("sweetalert");

const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
    CLIENT_ID,
    DOMAIN,
    CLIENT_SECRET,
    CALLBACK_URL
} = process.env;

const app = express();
app.use(bodyParser.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use( passport.initialize() );

app.use( passport.session() );

massive(process.env.CONNECTION_STRING).then(
    db => {
        app.set("db", db)
     console.log(dbChalk("Massive Demon listens"))
    }
);

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: "openid profile"
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get("db");
    db.findMember([profile.id]).then( memberResult => {
        if (!memberResult[0]) {
            db.create_id([
                profile.id
            ]).then( createdMember => {
                return done(null, createdMember[0].id)
            })
        } else {
            return done(null, memberResult[0].id)
        }
    })
}))

passport.serializeUser( (profile, done) => {
    // the profile information from Google is put on the session here
    done(null, profile.id);
    //whatever is passed out goes on to req.user
})
// this is used every time the user hits an endpoint so they don't have to log in every time.
passport.deserializeUser((profile, done) => {
        //putis info on req.user
    app.get("db").findMember([id]).then( loggenInMember => {
        done(null, loggenInMember[0]);
    })
})

app.get("/auth", passport.authenticate("auth0"));
app.get("/auth/callback", passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/profile",
    failureRedirect: "http://localhost:3000/#/membership"
}))
app.get("/auth/me", function(req, res) {
    if(req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send("AH AH AH! YOU DIDN'T SAY THE MAGIC WORD!")
    }
})

app.put("/api/update_membership/:id", ctrlr.updateMembership);

// axios.post("/api/save_membership", ctrlr.create)


let dbChalk = chalk.cyan;

let port = SERVER_PORT || 4200;
let portChalk = chalk.blue;
app.listen(port, () => {
    console.log(portChalk(`Node Demon speaks`))
})