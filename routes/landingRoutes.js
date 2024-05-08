const express = require('express')
const router = express.Router()

// controllers prefix
const landingRoute = require('../controllers/landingController')

router.get('/',landingRoute.landingPage)

router.get('/start-here',landingRoute.onBoardPage)

router.get('/advertisers',landingRoute.brandPage)

router.get('/content-creators',landingRoute.creatorsPage)

router.get('/privacy-center',landingRoute.privacyPolicyPage)

module.exports = router