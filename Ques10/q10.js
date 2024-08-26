function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

console.log(countVowels("hello")); 
console.log(countVowels("aEiOu")); 
console.log(countVowels("xyz")); 
console.log(countVowels("The quick brown fox jumps over the lazy dog")); 
