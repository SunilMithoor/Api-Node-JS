// import controllers onboarding
const userController = require('../controllers/onBoardingController.js');
const authJwt = require('../middleware/authJwt.js');
// router
const router = require('express').Router()


// use routers

router.post('/addUser', userController.addUser);

router.post('/loginUser', userController.loginUser);

router.get('/getAllUsers', authJwt.verifyToken, userController.getAllUsers);

router.delete('/deleteUser',authJwt.verifyToken, userController.deleteUser);

router.get('/logoutUser', authJwt.verifyToken, userController.logoutUser);

router.get('/getUserData', authJwt.verifyToken, userController.getUserData);


module.exports = router