const router = require("express").Router();
const userdb = require("./../controllers/users");
const likeddb = require("./../controllers/liked");
const matchesdb = require("./../controllers/matches");

router.get("/users/:id", userdb.findUser);

router.get("/users/if/:id", userdb.ifExists);

router.get("/users/genderfind/:id", userdb.findByGender);

router.post("/users/create", userdb.createUser); //don't use

router.put("/users/:id", userdb.updateUser); //don't use

router.post("/liked/create", likeddb.makeLike);

router.post("/matches/create", matchesdb.makeMatch);

router.get("/matches/find/:id", matchesdb.findMatch);

router.put("/matches/update", matchesdb.updateMatch);

router.delete("/matches/delete", matchesdb.destroyMatch);

router.post("/users/createOrUpdate", userdb.createOrUpdate); //use this for creating and updating users info

module.exports = router;