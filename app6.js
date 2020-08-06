var obj = {
  name: "omprakash",
  greet: function () {
    console.log(`hello  ${this.name}`);
  },
};
obj.greet();

obj.greet.call({ name: "sant raj" });
obj.greet.apply({ name: "satyam" });
