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
