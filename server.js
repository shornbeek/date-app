const express = require("express");
const mysql2 = require("mysql2");
const app = express();
const PORT = process.env.PORT || 3001;
require("./routes/api-routes")(app);

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, ()=>{
    console.log("App listenign on " + PORT);
});