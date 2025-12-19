const handleEven = (x) => {
	console.log(`number ${x} is even`);
};

const handleOdd = (x) => {
	console.log(`number ${x} is odd`);
};

function handleNum(num, callback1, callback2) {
	return num % 2 == 0 ? callback1(num) : callback2(num);
}

handleNum(4, handleEven, handleOdd);
