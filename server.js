var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.set('port', process.env.PORT || 80);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use('/',routes);

// Start our server so that it can begin listening to client requests.
app.listen(app.get('port'), function(){
  console.log('Connected Port: ' + app.get('port') );
});
