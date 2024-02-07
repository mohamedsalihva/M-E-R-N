const express = require ('express');
const router = express.Router();
const loginuser = require('../controller/authercontroller');



router.post('/login',loginuser);

module.exports = router;