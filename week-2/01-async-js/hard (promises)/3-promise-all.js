/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wait t1 is resolved");
    }, t1 * 1000);
  });
}

function wait2(t2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wait t2 is resolved");
    }, t2 * 1000);
  });
}

function wait3(t3) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wait t3 is resolved");
    }, t3 * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  return Promise.all([wait1, wait2, wait3]).then(() => {
    const end = Date.now();
    return end - start;
  });
}
module.exports = { wait1, wait2, wait3, calculateTime };

