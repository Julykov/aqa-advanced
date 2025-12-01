const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumArr(nums){
    return nums.filter(num => num % 2 === 0)
}

const sum = sumArr(numbers)
console.log(sum)