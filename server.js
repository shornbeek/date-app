const express = require("express");
const mysql2 = require("mysql2");
const app = express();
const PORT = process.env.PORT || 3001;
let db = require('./models');
const sequelize = require("sequelize");
const server = require("http").createServer(app);
const path = require("path");



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(require("./routes/api-routes.js"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

db.sequelize.sync({force:true}).then(function() {
    server.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });