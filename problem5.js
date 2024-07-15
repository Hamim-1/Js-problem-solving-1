const person = {
    name: 'John',
    age: 30,
    greet: function () {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
    }

}


console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."