const {User} = require("./../models");
console.log(User);
function index(req, res) {
    User.findAll({}).then(result => {
        res.json(result);
    }).catch(err => {
        if (err) throw err;
    });
}
function ifExists(req,res) {
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
}

module.exports = {
    index, ifExists
}