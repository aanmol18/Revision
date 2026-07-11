// let exponent = 0;

// function power(a,b){
//     exponent = a**b;
//     return exponent;
// }

// const powerFun = power(2,5);

// console.log(powerFun)


const obj = {
    name: "Anmol",
    "full name" : "Kavita Anurag Yadav",
    greet: function (){
        console.log(`Hello ${this.name}! How are you?`)
    }
}
// console.log(Object.keys(obj))

// console.log(Object.values(obj))

// console.log(Object.entries(obj)) // Returns an array of [key, value] pairs.



// Object.freeze(obj); // Prevents adding, removing, or changing properties.
// obj["full name"] = "another";
// console.log(Object.entries(obj))


// Object.seal(obj);  // Prevents adding or deleting properties, but allows modifying existing ones.
// obj.name = "KAnmol";
// obj.age = 22;

// console.log(obj)



// console.log(Object.hasOwn(obj, "name"));     // Checks whether an object has a specific own property.
// console.log(Object.hasOwn(obj, "age"));



// for(const[key, value] of Object.entries(obj)){
//     console.log(`${key}: ${value}`);
// }



// const obj2 = {
//     name: "kavita"
// }

// obj.greet.call(obj2);

