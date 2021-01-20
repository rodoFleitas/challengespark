const server = require("express").Router();
const User = require("../models/User.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../auth/authenticateToken");

require("../auth/passportConfig.js");

server.use(passport.initialize()); //Arranca passport mediante middleware
server.use(passport.session());

//Ruta para crear un usuario

server.post("/register", async (req, res, next) => {
  const {
    name,
    lastName,
    email,
    password,
    document,
    home,
    totalAccesses,
    admin,
  } = req.body;
  const newUser = new User({
    name,
    lastName,
    email,
    password,
    document,
    home,
    totalAccesses,
    admin,
  });
  newUser.password = await newUser.encryptPassword(password);
  const createUser = await newUser.save();
  res.json(createUser);
});

//Ruta para iniciar sesión

server.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      const date = new Date();
      const currentDay = () => {
        const day = date.getDate();
        const year = date.getYear() + 1900;
        const month = date.getMonth();

        const shortDate= `${year}-${month < 10 ? `0${month + 1}` : month}-${day}`;
        return shortDate;
      };
      const dataDay = {
        date: currentDay(),
      };
      if (err) return next(err);
      if (!user) return res.json(info);
      req.logIn(user, async (err) => {
        if (err) {
          return next(err);
        }
        const body = {
          id: user._id,
          name: user.name,
          lastname: user.lastName,
          email: user.email,
          admin: user.admin,
          document: user.document,
          home: user.home,
          totalAccess: user.totalAccesses,
        };
        await user.updateOne({ $push: { totalAccesses: dataDay } });
        const accessToken = jwt.sign(
          { user: body },
          process.env.ACCESS_TOKEN_SECRET
        );
        res.cookie("authcookie", accessToken, {
          maxAge: 720000,
          httpOnly: true,
        });
        return res.json(body);
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

//Ruta para obtener el perfil basandose en la autenticacion del token

server.get("/profile", authenticateToken, (req, res) => {
  res.send(req.user);
});

//Ruta para desloguearse

server.get("/logout", (req, res) => {
  res.clearCookie("authcookie");
  req.logout();
  res.json({ message: "Has cerrado sesion" });
});

//Ruta para editar un usuario

server.put("/edit/:id", (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  User.findOneAndUpdate({ _id: id }, data, { new: true }).then(() => {
    User.find().then((users) => {
      if (!users) {
        return res.status(400).json({ message: "No se encontraron usuarios" });
      }
      res.status(200).json(users);
    });
  });
});

//Ruta para eliminar un usuario

server.delete("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  User.findOneAndDelete({ _id: id }).then(() => {
    User.find().then((users) => {
      if (!users) {
        return res.status(400).json({ message: "No se encontraron usuarios" });
      }
      res.status(200).json(users);
    });
  });
});

//Ruta para traer todos los usuarios

server.get("/", (req, res, next) => {
  User.find()
    .then((users) => {
      if (!users) {
        return res.status(400).json({ message: "No se encontraron usuarios" });
      }
      res.status(200).json(users);
    })
    .catch(next);
});

module.exports = server;
