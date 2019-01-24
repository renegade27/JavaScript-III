/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In the global scope, the 'this' keyword points to the window object
* 2. Whenever a function is called with dot notation, the object before the dot is 'this'
* 3. Whenever 'this' is used in a constructor function, 'this' is the object instance that's passed through.
* 4. Whenever you use call or apply, 'this' is defined explicitly.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function runFunc (variable) {
//     console.log(this);
//     return variable;
// }

// runFunc('123');


// Principle 2
const object1 = {
    'id': 0,
    'name': 'Samuel',
    'speak': function(statement) {
        console.log(`${this.name} said ${statement}`);
        console.log(this);
    }
};

object1.speak('could I get some lemonade?')
// code example for Implicit Binding

// Principle 3

function Animal(species, age = 1) {
    this.age = age;
    this.species = species;
    this.info = () => {
        console.log(`This ${this.species} is ${this.age} years old.`)
    }
}

const cat = new Animal('cat', 5);
const dog = new Animal('dog', 7);

cat.info();
cat.info.apply(dog);
// code example for New Binding

// Principle 4

const object2 = {
    'name' : 'Jack',
    'age' : 24,
    'height' : '5\'6'
}

function docReport(e1, e2, e3) {
    console.log(`${this.name} is ${this.age} years old. He came in today and his height is ${this.height}. He was seen by ${e1} on the ${e2} week of ${e3}.`)
}

docReport.call(object2, 'Dr. Fasho', '3rd', 'November');
// code example for Explicit Binding