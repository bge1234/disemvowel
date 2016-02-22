function disemvowel(input) {
  var vowels = [];
  var consonants = []
  for(i = 0; i < input.length; i++) {
    if(input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u')
      vowels.push(input[i]);
    else if(input[i] !== ' ')
      consonants.push(input[i])
  }

  console.log("consonants = " + consonants);
  console.log("vowels = " + vowels);
}

disemvowel("Here is some text");
disemvowel("How much wood would a woodchuck chuck if a woodchuck could chuck wood");
