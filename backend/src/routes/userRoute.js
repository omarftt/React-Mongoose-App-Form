const {Router} = require("express");
const {getUsers, createUsers} = require("../controllers/users.controller");
const router = Router();


router.route('/')
    .get(getUsers)
    .post(createUsers)

module.exports = router;