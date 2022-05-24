const arr1 = [1, 2, 3, 4];

// reduce ref
let reduceRef = arr1.reduce((prev, curr, index, array) => {
  console.log(
    `reduceRef ---- sum of array:${prev + curr}, index:${index}, array:${array}`
  );
  return prev + curr;
}, 10);
console.log("reduceRef:", reduceRef);

// myReduce
Array.prototype.myReduce = function (cb, initialValue = 0) {
  let acc = 0;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc + initialValue;
};

let myRe = arr1.myReduce((prev, curr, index, array) => {
  console.log(
    `myReduce ---- sum of array:${prev + curr}, index:${index}, array:${array}`
  );
  return prev + curr;
}, 10);

console.log("myReduce:", myRe);
