const {Matches} = require("./../models");
const {Likes} = require("./../models");
console.log(Matches);
//finds if there are matches for a user
const findMatch = (currentUserId,array) => {
    let matches = [];
    for(let i = 0; i < array.length; i++){
        if (currentUserId === array[i].dataValues.userId){
            for (let j = 0; j < array.length; j++){
                if((currentUserId === array[j].dataValues.liked) && (array[j].dataValues.userId === array[i].dataValues.liked)){
                    let obj = {
                        user1 : array[i].dataValues.userId,
                        user2 : array[j].dataValues.userId
                    }
                    matches.push(obj);

                }
            }
        }
    }
    return matches;
}

module.exports = {
    makeMatch(req,res){
        Likes.findAll().then(result => {
            console.log("req.body ",req.body);
            let userMatches = findMatch(parseInt(req.body.id), result);
            console.log("matches",userMatches);
            userMatches.forEach(item => {
                Matches.findOrCreate({
                    where: {
                        user1Id: item.user1,
                        user2Id: item.user2
                    },
                    defaults: {
                        user1Id: item.user1,
                        user2Id: item.user2
                    }
                }).then((result) => {
                    let created = result[1];
                    if (created){
                        console.log(`Created match between user ${item.user1} and ${item.user2}`);
                    } else {
                        console.log(`Match between user ${item.user1} and ${item.user2} already exists`);
                    }
                    res.end();
                }).catch(err => {
                    if(err) throw err;
                });
            })
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if(err) throw err;
        })
    },

    findMatch(req,res){
        console.log("userId",req.body);
        Matches.findAll({
            where: {
                $or: [{user1Id:req.params.id}, {user2Id:req.params.id}]
            }
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if (err) throw err;
        })
    },

    updateMatch(req,res){
        Matches.update({
            user1Waved: req.body.user1Waved,
            user2Waved: req.body.user2Waved,
            user1Active: req.body.user1Active,
            user2Active: req.body.user2Active,
            canCall: req.body.canCall
        },{
            where: {
                user1Id: req.body.user1Id,
                user2Id: req.body.user2Id
            }
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if(err) throw err;
        });
    },

    destroyMatch(req,res){
        Matches.destroy({
            force:true,
            where: {
                user1Id: req.body.user1Id,
                user2Id: req.body.user2Id
            }
        }).then(() => {
            Likes.destroy({
                force:true,
                where: {
                    $or: [{userId: req.body.user1Id, liked: req.body.user2Id}, {userId: req.body.user1Id, liked: req.body.user2Id}]
                }
            }).then(() => {
                console.log(`Removed match and parent likes for users ${req.body.user1Id} and ${req.body.user2Id}`);
                res.end();
            }).catch(err => {
                if (err) throw err;
            })
            res.end();
        }).catch(err=> {
            if (err) throw err;
        });
    }

}