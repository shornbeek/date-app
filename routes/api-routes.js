const router = require("express").Router();
const db = require("./../controllers/users");

router.get("/users", db.index);

router.get("/users/if/:id", db.ifExists);

module.exports = router;