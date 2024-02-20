const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const checklogin = require('../utils/checklogin');


router.post('/users',userController.createUser);
router.get('/users', checklogin,userController.getUsers);
router.put('/users', userController.updateUser);
router.delete('/users', userController.deleteUser);

module.exports = router;