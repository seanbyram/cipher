jQuery(document).ready(function() {


  var codedSentence = prompt("write a short sentence");
  alert(codedSentence);

  function print(x) {
    console.log(x);
  }

print(codedSentence);


function findFirst(y){
  y = y.toUpperCase();
  return y.charAt(0);

};

var firstLetter = findFirst(codedSentence);

print(firstLetter);


function findLast(y){
  y = y.charAt(y.length-1);
  return y.toUpperCase();
}

var lastLetter = findLast(codedSentence);

print(lastLetter);



function normal(x) {
  x = firstLetter + lastLetter;
  return x;
};

var normalMe = normal(codedSentence);

print(normalMe);


function reverse(x) {
  x = lastLetter + firstLetter;
  return x;
};

var reverseMe = reverse(codedSentence);

print(reverseMe);

// function printTogether(x){
//   x = findFirst(codedSentence) + findLast(codedSentence);
//   return x;
// }
 var printTogetherMaybe = normal(codedSentence) + reverse(codedSentence);

print(printTogetherMaybe);

function findAll(x){
  x = normal(codedSentence) + reverse(codedSentence);
  return x;
}

alert(findAll());




























});
