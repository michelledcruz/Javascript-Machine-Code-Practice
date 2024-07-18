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
