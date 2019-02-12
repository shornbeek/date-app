const router = require("express").Router();
const db = require("./../controllers/users");

router.get("/users/:id", db.findUser);

router.get("/users/if/:id", db.ifExists);

router.get("/users/genderfind/:id", db.findByGender);

module.exports = router;