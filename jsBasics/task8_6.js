const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const secondArr = numbersList.slice();
const sortedSecondArr = secondArr.sort((a, b) => a - b);

console.log(numbersList);
console.log(sortedSecondArr);

console.log(`\nFirst array: ${numbersList}`);
console.log(`Second array: ${sortedSecondArr}`);
