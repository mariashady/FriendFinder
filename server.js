// Dependencies
let express = require("express");
let path = require("path"); 


// Set up express
let app = express();
let PORT = process.env.PORT || 8086;

app.use(express.static("./app/static"));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });