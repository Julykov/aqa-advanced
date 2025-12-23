const numbers = [1, 2, 3, 4, 5];

function changeArr(nums) {
	return nums.map((num, index) => num * index);
}

const numbers2 = changeArr(numbers);
console.log(numbers2);
