const express = require("express");
const mysql2 = require("mysql2");
const app = express();
const PORT = process.env.PORT || 3001;
let db = require('./models');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(require("./routes/api-routes.js"));

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });