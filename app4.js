var person = {
  firstName: "",
  lastName: "",
  greet: function () {
    return this.firstName + " " + this.lastName;
  },
};

var om = Object.create(person);

om.firstName = "omprakash";
om.lastName = "chautala";

var sant = Object.create(person);

sant.firstName = "sant";
sant.lastName = "raj";

console.log(om.greet());
console.log(sant.greet());
