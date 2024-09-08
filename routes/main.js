const express=require('express')

const {login, dashboard,generateOtp,checkDomainExit}=require('../controllers/main')

const router= express.Router()

const authMiddleware=require('../middleware/auth')


router.route('/login').post(login)


router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/getOtp').get(generateOtp)
router.route('/domainCheck').get(checkDomainExit)


module.exports=router
