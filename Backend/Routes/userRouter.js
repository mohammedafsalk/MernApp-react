const express = require("express");
const { getAll, addUser } = require("../Contoller/userController");
const router = express.Router();

router.get('/',getAll)
router.post('/add',addUser)

module.exports = router;
