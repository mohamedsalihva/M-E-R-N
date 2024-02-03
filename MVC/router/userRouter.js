const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.post('/submit',userController.createUser);
router.get('/getData', userController.getUsers);
router.put('/updateData', userController.updateUser);
router.delete('/deleteData', userController.deleteUser);

module.exports = router;