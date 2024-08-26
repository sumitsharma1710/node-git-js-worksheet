function areAnagrams(str1, str2) {

    const Str1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const Str2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
    

    if (Str1.length !== Str2.length) {
      return false;
    }
    
    // Sort the characters of both strings and compare
    const sortedStr1 = Str1.split('').sort().join('');
    const sortedStr2 = Str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
  }
  
  console.log(areAnagrams("listen", "silent")); 
  console.log(areAnagrams("hello", "world"));
  console.log(areAnagrams("Astronomer", "Moon starer")); 
  console.log(areAnagrams("The Morse Code", "Here come dots"));