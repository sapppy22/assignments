## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");
fs.readFile("hey.txt", "utf-8", (err, data) => {
  console.log(data);
});

var sum1 = 0;
for (var i = 0; i < 100; i++) {
  sum1++;
}
console.log(sum1);

var sum2 = 0;
for (var j = 0; j < 10; j++) {
  sum2++;
}
console.log(sum2);
