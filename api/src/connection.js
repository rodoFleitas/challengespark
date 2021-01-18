const mongoose = require("mongoose");

const db = mongoose.connection

mongoose.connect(process.env.URI, {
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