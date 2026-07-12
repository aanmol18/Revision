function intro (city, country){
    console.log(`Hello! Myself ${this.name}. I live in ${city}, ${country}`);
}

const person = {
    name: "Anmol",
}

intro.call(person, "Noida", "India");

person["name"] = "Anurag";

intro.call(person, "Aligarh", "India");

// The call() method lets you invoke a function immediately while explicitly setting the value of this. It also allows you to pass arguments individually.