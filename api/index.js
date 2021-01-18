const server = require('./src/app.js')
require('./src/connection')

const port = 5000;

//Iniciamos Mongoose y el servidor a la vez.

server.listen(port, () => {
    console.log(`%Server listening at port ${port}`)
})
