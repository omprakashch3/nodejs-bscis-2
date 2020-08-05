const Emitter = require("events");
const util = require("util");

function greetr() {
  this.greeting = "hello! good morning";
}

util.inherits(greetr, Emitter);

greetr.prototype.greet = function () {
  console.log(this.greeting);
  this.emit("greet");
};

const greeter1 = new greetr();

greeter1.on("greet", function () {
  console.log("someone greeted");
});
greeter1.greet();
