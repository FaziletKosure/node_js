var express = require('express');
var router = express.Router();
const registerController= require("../controllers/registerController")

/* GET users listing. */
router.get('/',registerController.get_register );

module.exports = router;
