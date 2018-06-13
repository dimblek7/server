const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            // new User({ googleID: profile.id }).save();
            User.find({ googleID: profile.id }).then(res => {
                console.log(res);
            });
        }
    )
);

// console.log("accessToken", accessToken);
// console.log("refreshToken", refreshToken);
// console.log("profile", profile);
// console.log("Done:", done);
// try {
//     User.find({}, "googleID", function(err, users) {
//         if (err) {
//             console.log(err);
//         } else {
//             // render("user-list", users);
//             console.log("retrieved list of names", users.length, users[0].name);
//         }
//     });
//     // var temp = new User({ googleID: "11111" });
//     // temp.save(function(error, user1) {
//     //     console.log("error:" + error);
//     //     console.log("user1:" + user1);
//     // });
// } catch (e) {
//     console.log("here" + e);
// }
