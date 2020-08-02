var greet = require("./greet");
var greeet = require("./greet1");

greet();
greeet.greet();

var greeeet = require("./greet1").greet;

greeeet();

var greet3 = require("./greet2");

greet3.greet();

greet3.greeting = "once again hello om";
var greet3 = require("./greet2");
greet3.greet();

var Greet4 = require("./greet4"); //its a constructor

var geetr = new Greet4();
geetr.greet();

var greet5 = require("./greet5").greet;
greet5();
