// function hasUniqueCharacters(str) {
//     // Create an object to store character frequencies
//     const charFrequency = {};
  
//     // Loop through each character in the string
//     for (let char of str) {
//       // If the character is already in the frequency object, return false
//       if (charFrequency[char]) {
//         return false;
//       }
//       // Otherwise, mark the character as seen by setting its frequency to 1
//       charFrequency[char] = 1;
//     }
  
//     // If the loop completes without returning false, all characters are unique
//     return true;
//   }
  
//   // Example usage
//   console.log(hasUniqueCharacters("abcdef"));  // true
//   console.log(hasUniqueCharacters("hello"));   // false


// function areChractersUnique(str) {
     
//     // Find the length of the string
//     let n = str.length;
     
//     // outer loop
//     for(let i = 0; i < n; i++)
//         // innerloop
//         for(let j = i + 1; j < n; j++)
//             if(str[i] == str[j])
//                 return false;
//     return true;
// }

function hasUniqueCharacter(str) {
    str = String(str)
    const lowerCase = str.toLowerCase()
    for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase.includes(lowerCase.charAt(i), i+1)) {
          return false
        }
    }
    return true
}

console.log(hasUniqueCharacter('helo'));
console.log(hasUniqueCharacter('hello'));
console.log(hasUniqueCharacter(122));


// function hasUniqueCharacter(str) {
//     for (let i = 0; i < str.length; i++) {
//         let lowerCase = str.toLowerCase()
//         let curCharacter = lowerCase[i]
//         for (let k = 0; k < str.length; k++) {
//           let lowerCase1 = str.toLowerCase()
//           let compareCharacter = lowerCase1[k]
//           if (i !== k && compareCharacter === curCharacter) {
//             return false
//           }
//         }
//     }
//     return true
// }

// console.log(hasUniqueCharacter('heLlo'));
// console.log(hasUniqueCharacter('adli'));
// console.log(hasUniqueCharacter('abcd'));

