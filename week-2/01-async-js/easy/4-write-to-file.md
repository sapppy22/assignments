## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
const data = "I am 5 time ballon dor";
fs.writeFile("hey.txt", data, (err) => {
  console.log("The data is written");
});

var sum1 = 0;
for (var i = 0; i < 100; i++) {
  sum1++;
}

console.log(sum1);

fs.readFile("hey.txt", "utf-8", (err, data) => {
  console.log(data);
});
