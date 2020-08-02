function greeter() {
  (this.greeting = "hello omprakash"),
    (this.greet = function () {
      console.log(this.greeting);
    });
}

module.exports = new greeter();
