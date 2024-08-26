function isPalindrome(str) {
  const Str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedStr = Str.split("").reverse().join("");

  return Str === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("Hello, World!"));
