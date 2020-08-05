function greeter() {
  (this.greeting = "hello chautala"),
    (this.greet = function () {
      console.log(this.greeting);
    });
}

module.exports = greeter;
