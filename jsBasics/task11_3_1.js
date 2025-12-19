async function fetchData(url, options) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Request failed!')
        }
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('An error occured', error);
        throw error;
    }
}

const todos_url = 'https://jsonplaceholder.typicode.com/todos/1'
const user_url = 'https://jsonplaceholder.typicode.com/users/1'


const promise_all_result = Promise.all([fetchData(todos_url), fetchData(user_url)])
.then(x => console.log('Fullfilled', x))
.catch(x => console.log('Rejected', x))
console.log(promise_all_result)


const promice_race_result = Promise.race([fetchData(todos_url), fetchData(user_url)])
.then(x => console.log('Fullfilled', x))
.catch(x => console.log('Rejected', x))
console.log(promice_race_result)