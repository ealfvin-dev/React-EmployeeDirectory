const express = require('express');
const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.listen(PORT, function(){
    console.log("App running on port " + PORT);
});