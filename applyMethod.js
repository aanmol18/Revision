// The apply() method is almost identical to call(). The main difference is how arguments are passed.

// call() → Arguments are passed individually.
// apply() → Arguments are passed as an array (or array-like object).


function introduce(city, country) {
    console.log(
        `My name is ${this.name}. I live in ${city}, ${country}.`
    );
}

const person = {
    name: "Anmol"
};

introduce.apply(person, ["Aligarh", "India"]);




const numbers = [10, 45, 7, 99, 23];
console.log(Math.max.apply(null, numbers));


const maximum = numbers.reduce((max, curr) => curr > max ? curr : max);
console.log(maximum);


const largest = Math.max(...numbers);
// console.log(largest)

