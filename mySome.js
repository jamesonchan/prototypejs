const arr2 = [1, 2, 3, 4];

// some ref
const odd = arr2.some((el, index, array) => {
  console.log(`someRef ----- el:${el}, index:${index}, array:${array}`);
  return el % 2 !== 0;
});
console.log("odd:", odd);

// mySome
Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) return true;
  }
  return false;
};

const even = arr2.mySome((el, index, array) => {
  console.log(`mySome ---- el:${el}, index:${index}, array:${array}`);
  return el % 2 === 0;
});
console.log("even:", even);
