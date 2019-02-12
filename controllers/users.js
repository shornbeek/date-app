const {User} = require("./../models");
console.log(User);
function index(req, res) {
    User.findAll({}).then(result => {
        res.json(result);
    }).catch(err => {
        if (err) throw err;
    });
}


module.exports = {
    index
}