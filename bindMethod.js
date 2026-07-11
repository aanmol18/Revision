const person = {
    name: "Anmol"
}

function greet(){
    console.log(`Hello! myself ${this.name}. How are you`);
}

const newfunc = greet.bind(person);
newfunc()

// The bind() method creates a new function with a fixed this value. Unlike call() and apply(), it does not execute the function immediately.