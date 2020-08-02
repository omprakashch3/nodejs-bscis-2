// object proprties and methods

// var obj = {
//   greet: "Hello",
// };

// console.log(obj.greet);
// console.log(obj["greet"]);
// var ram = "greet";
// console.log(obj[ram]);

// functions and arrays

var a = [];
a.push(function () {
  console.log("hello om");
});

a.push(function () {
  console.log("its 9 am wake up");
});

a.push(function () {
  console.log("hello take some tea");
});

console.log(a);
a.forEach(function (item) {
  item();
});
