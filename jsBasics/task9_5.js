const users = [
    {"name": "Tom", "email": "some_tom_email@gmail.com", "age": 18},
    {"name": "Jack", "email": "some_jack_email@gmail.com", "age": 19},
    {"name": "Bill", "email": "some_bill_email@gmail.com", "age": 20}
]

for (const user of users) {
    const {name, email, age} = user
    console.log(name)
    console.log(email)
    console.log(age)
}  

for (const user of users) {
    const entries = Object.entries(user)
    console.log(entries)
}   