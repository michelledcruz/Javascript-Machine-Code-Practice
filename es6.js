//Given a string reverse each word in the sentence

var str = "hey how are you";

var split_word = str.split(" ") // split word first
var arr = split_word.map(function(word){
  return word.split("").reverse().join(""); // loop through each word and reverse
});

var res = arr.join(" ") // join all words by space
console.log(res);


//How to check if the given object is array or not

//add new property named as tax in the existing products and return new products array

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 }
];

const tax = products.map(product => {
  return {
   ...product,
   productTax: product.price* 1.2
 };
})

console.log(tax);


//Given an array of products, where each product has a nested array of reviews, write a function that adds an averageRating property to each product, which is the average of all its review ratings.

const products = [
  {
    name: 'Laptop',
    reviews: [
      { rating: 4 },
      { rating: 5 },
      { rating: 3 }
    ]
  },
  {
    name: 'Phone',
    reviews: [
      { rating: 2 },
      { rating: 4 }
    ]
  }
];




const avgRatingRes = products.map( product =>{
const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
const averageRating = totalRating / product.reviews.length;
  return {
    ...product,
    avgRating: averageRating
  };
})

console.log(avgRatingRes);


//Given an array of objects representing students, each with a name and an array of grades, write a function that returns an array 
//where each student object has a new property gradeSummary, which contains the highest, lowest, and average grade.
const students = [
  { name: 'John', grades: [85, 92, 78, 88] },
  { name: 'Jane', grades: [95, 90, 93, 97] },
  { name: 'Jack', grades: [70, 75, 80, 65] }
];

const studentsWithMarks = students.map(student =>{
    
    const highestMark =  Math.max(...student.grades);
    const lowestMark =  Math.min(...student.grades);
    const totalMark = student.grades.reduce((sum, marks) => sum + marks, 0);
    const averageMark = totalMark / student.grades.length;
     
    return{
        ...student,
        gradeSummary:
            {
                highestMarks: highestMark,
                lowestMarka: lowestMark, 
                averageMarks: averageMark
                }
            
        // avgMarks:avgMark
    };
})
// console.log(newArr);
console.log(studentsWithMarks);


//Given an array of employee objects, each containing name, age, and department, write a function that returns an array of names of employees who are older than 30 and work in the "Engineering" department.
//

const employees = [
  { name: 'Alice', age: 28, department: 'HR' },
  { name: 'Bob', age: 35, department: 'Engineering' },
  { name: 'Charlie', age: 32, department: 'Engineering' },
  { name: 'David', age: 25, department: 'Marketing' }
];
// Expected output: ['Bob', 'Charlie']
const emp = employees.filter(employee => employee.age>30 && employee.department === 'Engineering');
const NameList = emp.map(Name => Name.name);
console.log(NameList);


//Given an array of product objects, each containing name, category, and price, write a function that calculates the total cost of all products in the "Electronics" category that are priced above $100.
//

const products = [
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'Keyboard', category: 'Electronics', price: 80 },
  { name: 'Phone', category: 'Electronics', price: 600 },
  { name: 'Shirt', category: 'Clothing', price: 40 }
];
// Expected output: 1800


const list = products.filter(product => product.category === "Electronics" && product.price > 100);
const Total = list.reduce((sum, list) => sum + list.price, 0 );
console.log(Total);


//Given an object representing a person with properties name, age, and address (which is another object with city and country), write a function that returns a string in the format "Name is X, age is Y, lives in Z, W."
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};


const details = ({ name, age, address: { city, country}}) => {
    return `Name is ${name}, age is ${age}, lives in ${city}, ${country}.`;
}


console.log(details(person));

