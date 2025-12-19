const users = [
	{ name: 'Tom', email: 'some_tom_email@gmail.com', age: 18 },
	{ name: 'Jack', email: 'some_jack_email@gmail.com', age: 19 },
	{ name: 'Bill', email: 'some_bill_email@gmail.com', age: 20 },
];

for (const { name, email, age } of users) {
	console.log(`The user with name ${name} and email ${email} is ${age} years old`);
}
