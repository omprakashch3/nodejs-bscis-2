var Emitter = require("./eemitter");

var emtr = new Emitter();

emtr.on("greet", function () {
  console.log("he om someone is calling you");
});

emtr.on("greet", function () {
  console.log("some in remembering you omprakash");
});

console.log("hello om");

emtr.emit("greet");
