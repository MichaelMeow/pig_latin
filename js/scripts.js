// Business Logic
function isWord(userText) {
  return userText.split(/(\.|,|"| |!|\?)/);
}

function ay(word) {
  var firstVowelPosition = word.search(/[aeiouy]/gi);
  var firstLetter = word.charAt(0);

  if (firstLetter.match(/[aeiou]/gi)) {
    word = word + "way";
    return word;
  } else if (firstLetter.match(/[a-z]/gi) && firstVowelPosition !== -1){
    if (word.charAt(firstVowelPosition) == "u" && word.charAt(firstVowelPosition-1) == "q"){
      return word.substr(firstVowelPosition+1) + word.substr(0,firstVowelPosition+1) + "ay";
    } else {
      return word.substr(firstVowelPosition) + word.substr(0,firstVowelPosition) + "ay";
    }
  } else {
    return word;
  }
}

// User Inferface

$(document).ready(function() {
  $("#latinForm").submit(function(event) {
    event.preventDefault();
    var userInput = $(".userInput").val().toLowerCase();
    var answer = "";
    isWord(userInput).forEach(function(word){
      answer += ay(word);
    })
    $(".answer").text(answer);
  });
});
