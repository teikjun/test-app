const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('./models/user');

// set up passport configs
passport.use(new GoogleStrategy({
  clientID: '802188459296-h1gska49bie30n68mti8d07tosc5rc7d.apps.googleusercontent.com',
  clientSecret: 'h7n4UrnZk18vLKjBH6uzPn0u',
  callbackURL: '/auth/google/callback'
}, function(accessToken, refreshToken, profile, done) {
  User.findOne({ where: { googleid: profile.id } })
    .then(function(user) { 
        if (!user) {
          const user = new User({
            name: profile.displayName,
            googleid: profile.id
          });
          user.save()
            .catch(function(err) {
              console.log(err); 
            });
          return done(err, user);    
        } else {
          return done(err, user);
        }  
    })
    .catch(function(error) {
        done(error);
    });
}));
            

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

module.exports = passport;
