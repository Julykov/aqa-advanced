const person = {
    firstName: "John",
    lastName: "Dow",
    age: 20
}

person.email = "some_email@gmail.com"
console.log(person)

delete person.age
console.log(person)
