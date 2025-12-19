function calculate_square_v1(width, height) {
	return width * height;
}
console.log(calculate_square_v1(5, 10));

const square_v2 = function (width, height) {
	return width * height;
};
console.log(square_v2(6, 10));

const square_v3 = (width, height) => width * height;
console.log(square_v3(7, 10));
