module.exports = function (app) {

    /*var authData = {
        email: 'aaa',
        password: 'sss',
        nickname: 'ddd'
      };
    */
    var database = require("./database");
    function findUser(id,pw){
        let user=database.findOneListing("users",{
            id:id,
            pw:pw
        });
        delete user.pw;
        return user;
    }

    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        console.log("serializeUser");
        done(null, user.email);
    });

    passport.deserializeUser(function (id, done) {
        console.log("deserializeUser");
        done(null, authData);
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'pwd'
        },
        function (id, pw, done) {
            const user = findUser(id,pw);
            if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
            /*if (username === authData.email) {
                if (password === authData.password) {
                    return done(null, authData, {
                        message: 'Welcome.'
                    });
                } else {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
            } else {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }*/
        }
    ));
    return passport;
}