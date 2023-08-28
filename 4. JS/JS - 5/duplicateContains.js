let array = [6, 8, 15, 7, 13, 9, 11, 18];
function findDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
       for (let j = i + 1; j < arr.length; j++) {
       if (arr[i] === arr[j]) {
             return true
          }
       }
    }
    return false;
}

console.log(findDuplicates([1, 2, 3, 1])); // Output: true
console.log(findDuplicates([1, 2, 3, 4])); // Output: false
console.log(findDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

