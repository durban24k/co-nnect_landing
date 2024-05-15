const express = require('express')
const router = express.Router()

const engineAuthRoutes = require('../controllers/authController')
const engineRoutes = require('../controllers/engineController')

router.get('/brand-signup',engineAuthRoutes.signupPage)

router.get('/brand-login',engineAuthRoutes.loginPage)

router.get('/snitch-engine',engineRoutes.engineSearchPage)

router.get('/snitch-results',engineRoutes.engineResultPage)

module.exports = router