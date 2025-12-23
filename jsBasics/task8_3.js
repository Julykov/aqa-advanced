const numbers = [10, 20, 30, 40, 50];

function sumArr(nums) {
	return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const sum = sumArr(numbers);
console.log(sum);
