const passport = require('passport')
const localPassport = require('passport-local').Strategy;
const User = require('../models/User.js')

passport.use("login", new localPassport({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => {
        User.findOne({email: email}).then(user => {
            if (!user) {
                return done(null, false, {message: "Usuario no encontrado o inexistente."})
            }
            if (!user.matchPassword(password)) {
                return done(null, false, {message: "Contraseña invalida"})
            }
            return done(null, user, {message: "Bienvenido de nuevo"})
        }).catch(err => done(err))
}))

passport.serializeUser(function(user, done){
    done(null, user._id); // A este done se le pasa el null porque no hubo errores y luego el ID para serializar 
});

passport.deserializeUser(function(id,done){
    User.findOne({_id: id})
    .then(user => {
      const userInfo = {
        name: user.name,
        lastname: user.lastName,
        admin: user.admin
      }
      done(null, userInfo);
    })
  });