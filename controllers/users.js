const {User} = require("./../models");
console.log(User);
module.exports = {

    findUser(req, res) {
        User.findAll({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if (err) throw err;
        });
    },

    ifExists(req,res) {
        User.count({
            where: {
                id: req.params.id
            }
        }).then(result => {
            if(result === 0){
                res.send(false);
            }else{
                res.send(true);
            }
        }).catch(err => {
            if (err) throw err;
        });
    },

    findByGender(req,res) {
        User.findOne({
            where: {
                id: req.params.id
            }
        }).then(result1 => {
            if(result1.findMan && result1.findWoman){
                User.findAll({
                }).then(result2 => {
                    let noSelf = result2.filter(user => user.id !== req.params.id);
                    let final = [];
                    noSelf.forEach(match => {
                        if ((match.findMan && !result1.sex) || (match.findWoman && result1.sex)){
                            final.push(match);
                        }
                    });
                    res.json(final);
                }).catch(err => {
                    if (err) throw err;
                });
            } else if (result1.findMan){
                User.findAll({
                    where: {
                        sex: false
                    }
                }).then(result2 => {
                    let noSelf = result2.filter(user => user.id !== req.params.id);
                    let final = [];
                    noSelf.forEach(match => {
                        if ((match.findMan && !result1.sex) || (match.findWoman && result1.sex)){
                            final.push(match);
                        }
                    });
                    res.json(final);
                }).catch(err => {
                    if (err) throw err;
                });
            } else {
                User.findAll({
                    where: {
                        sex: true
                    }
                }).then(result2 => {
                    let noSelf = result2.filter(user => user.id !== req.params.id);
                    let final = [];
                    noSelf.forEach(match => {
                        if ((match.findMan && !result1.sex) || (match.findWoman && result1.sex)){
                            final.push(match);
                        }
                    });
                    res.json(final);
                }).catch(err => {
                    if (err) throw err;
                });
            }
        }).catch(err => {
            if (err) throw err;
        });
    }


}