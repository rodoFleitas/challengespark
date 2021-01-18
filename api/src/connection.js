const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/myfirstdb";
const db = mongoose.connection

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

db.once('open', _ => {
    console.log('Database is connected')
})

db.on('error', err => {
    console.log(err)
})