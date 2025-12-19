const getResource = (url) => {
	return fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Request failed!');
			}
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.log('An error occured', error);
			throw error;
		});
};

const todos_url = 'https://jsonplaceholder.typicode.com/todos/1';
const user_url = 'https://jsonplaceholder.typicode.com/users/1';

const promise_all_result = Promise.all([getResource(todos_url), getResource(user_url)])
	.then((x) => console.log('Fullfilled', x))
	.catch((x) => console.log('Rejected', x));
console.log(promise_all_result);

const promise_race_result = Promise.race([getResource(todos_url), getResource(user_url)])
	.then((x) => console.log('Fullfilled', x))
	.catch((x) => console.log('Rejected', x));
console.log(promise_race_result);
