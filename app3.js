var Emitter = require("events");
var config = require("./config").events;

var emtr = new Emitter();

emtr.on(config.GREET, function () {
  console.log("he om someone is calling you");
});

emtr.on(config.GREET, function () {
  console.log("some in remembering you omprakash");
});

console.log("hello om");

emtr.emit(config.GREET);
