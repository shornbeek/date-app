const router = require("express").Router();
const {index} = require("./../controllers/users");

router.get("/users", index);

module.exports = router;