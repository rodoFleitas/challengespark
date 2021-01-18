const { Router } = require('express')

//Importamos las rutas

const userRoutes = require('./user.js')

//

const router = Router()

router.use('/users', userRoutes)


//Exportamos las rutas

module.exports = router;