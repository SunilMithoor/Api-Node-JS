// import controllers onboarding
const userController = require('../controllers/onBoardingController.js');
const authJwt = require('../middleware/authJwt.js');
// router
const router = require('express').Router()





// use routers
router.post('/addUser', userController.addUser)

router.get('/getAllUsers', userController.getAllUsers)

router.delete("/:id", userController.deleteUser);

router.get('/:id', authJwt.verifyToken,userController.getUserById)

router.post('/loginUser', userController.loginUser)

router.get('/logoutUser', userController.logoutUser)


module.exports = router