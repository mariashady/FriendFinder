// Dependencies
let express = require("express");
let path = require("path");

let app = express();

let PORT = process.env.PORT || 8080;

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Starting server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });