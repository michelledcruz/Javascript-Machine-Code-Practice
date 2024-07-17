//Given a string reverse each word in the sentence

var str = "hey how are you";

var split_word = str.split(" ") // split word first
var arr = split_word.map(function(word){
  return word.split("").reverse().join(""); // loop through each word and reverse
});

var res = arr.join(" ") // join all words by space
console.log(res);


//How to check if the given object is array or not
