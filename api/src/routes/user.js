const server = require("express").Router();
const User = require("../models/User.js");

server.get("/", (req, res, next) => {
  User.find().then(users => {
    if (!users) {
        return res
          .status(400)
          .json({ message: "No se encontraron usuarios" });
      }
      res.status(200).json(users);
    })
    .catch(next);
});


module.exports = server;