const arr3 = ["hello", "world", "cat", "doge"];

// filter ref
const filterRef = arr3.filter((el, index, array) => {
  console.log(`filterRef ----- el:${el}, index:${index}, array:${array}`);
  return el.length > 4;
});
console.log("filterRef:", filterRef);

// myFilter
Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};
const myFilter = arr3.myFilter((el, index, array) => {
  console.log(`myFilter ----- el:${el}, index:${index}, array:${array}`);
  return el.length > 4;
});
console.log("myFilter:", myFilter);
