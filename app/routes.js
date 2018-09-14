
// Get an Instance of express Route
const userController = require('./controllers/user.controller');
const router = require('express').Router();
const userMiddleware = require('./middlewares/user.middleware');
const authMiddleware = require('./middlewares/auth.middleware');

router.route('/login').post( userMiddleware.findUser, userMiddleware.validatePassword, authMiddleware.generateToken, userController.login);
router.route('/signup').post( userMiddleware.validateEmail, userMiddleware.newUser, authMiddleware.generateToken, userController.signup);
router.route('/profile').get( authMiddleware.authenticateUser, userController.userProfile);

module.exports = router