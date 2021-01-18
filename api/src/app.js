require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require("./routes/index.js");
const { ACCESS_TOKEN_SECRET } = process.env;
const session = require("express-session");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser(ACCESS_TOKEN_SECRET));
server.use(cors({origin: 'http://localhost:3000', credentials: true}))

server.use("/", routes);

server.use(session({
	secret: ACCESS_TOKEN_SECRET,
	resave: true, //Volvemos a guardar
	saveUninitialized: true //Si no le guardamos nada igual se guarda
}));

module.exports = server;