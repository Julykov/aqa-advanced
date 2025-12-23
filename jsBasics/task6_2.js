function check_age(age) {
	return age >= 18 ? true : false;
}

console.log(`The person is adult: ${check_age(25)}`);
console.log(`The person is adult: ${check_age(15)}`);
