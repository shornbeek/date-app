const {Liked} = require("./../models/liked.js");

module.exports = {

    makeLike(req,res){
        Liked.create({
            user1: req.body.userId,
            liked: req.body.likeId
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if(err) throw err;
        });
    }

}