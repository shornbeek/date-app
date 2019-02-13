const {Likes} = require("./../models");
console.log(Likes);
module.exports = {

    makeLike(req,res){
        Likes.create({
            userId: req.body.userId,
            liked: req.body.likeId
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if(err) throw err;
        });
    }

}