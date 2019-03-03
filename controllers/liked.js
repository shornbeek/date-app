const {Likes} = require("./../models");
console.log(Likes);
module.exports = {

    makeLike(req,res){
        console.log("hit make like");
        Likes.create({
            userId: req.body.userId,
            liked: req.body.liked
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if(err) throw err;
        });
    }

}