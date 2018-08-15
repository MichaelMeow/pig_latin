// Business Logic
function isWord(userText) {
  return userText.split(" ");
}

function ay(word) {
  var firstVowel = word.search(/[aeiouy]/gi);
  var firstLetter = word.charAt(0)


  if (firstLetter.match(/[aeiou]/gi)) {
    word = word + "way";
    return word;
  } else if (firstLetter.match(/[a-z]/gi) && firstVowel !== -1){
    if (word.charAt(firstVowel) == "u" && word.charAt(firstVowel-1) == "q"){
      return word.substr(firstVowel+1) + word.substr(0,firstVowel+1) + "ay"
    } else {
      return word.substr(firstVowel) + word.substr(0,firstVowel) + "ay"
    }
  } else {
    return word
  }
}

// User Inferface

$(document).ready(function() {
  $("#latinForm").submit(function(event) {
    event.preventDefault();
    console.log("2");
    var userInput = $(".userInput").val().toLowerCase();

    var answer = ""
    isWord(userInput).forEach(function(word){
      answer += ay(word) + " ";
    })


    $(".answer").text(answer);


  });
});
