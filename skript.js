function addieren(a,b) {
    
    return a+b
}
const add = (a,b) => a+b  

let numbers = [5, 11, 8, 29, 7, 15];
 
//Verwende die filter Methode mit eine Arrow funcion
let filterNumbers = numbers.filter(number=> number > 10);

console.log(filterNumbers); // [11, 20, 15]


let animals =["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];
let animalsUpperCase = animals.map(animal => animal.toUpperCase());

console.log(animalsUpperCase);

//Output: ["LION", "TIGER", "ELEPHANT", "GIRAFFE"];


let people = [

    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

let names = people.map(person => person.name);
console.log(names); //Output: ["Alice", "Bob", "Charlie"]



