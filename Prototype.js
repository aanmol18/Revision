// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function () {  // this is how method prototyping is done.
//     console.log(`Hello, I'm ${this.name}`);
// };

// const p1 = new Person("Anmol");  // This is how constructors are made
// const p2 = new Person("Rahul");

// p1.greet();
// p2.greet();



function Student(name){
    this.name = name;
}

Student.prototype.study = function(){
    console.log(`${this.name} is studying`);
};

const st = new Student("Anmol");

st.study();