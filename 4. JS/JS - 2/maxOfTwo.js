/**
 *
 * Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers without using any arrays or built-in functions like max().
 *
 */

function max_of_two(a, b) {
    return (a > b ? a : b)
}

// function max_of_two(a, b) {
//     // return (a >= b ? a : b);
//     if (a > b) {
//         return a
//     } else {
//         return b
//     }
// }

// function max_of_two(a, b) {
//     // return (a >= b ? a : b);
//     if (a > b) {
//         return a
//     } else if (a < b) {
//         return b
//     } else {
//         return 'Sama'
//     }
// }


  
console.log(max_of_two(10, 5));
console.log(max_of_two(45, 66));
console.log(max_of_two(44, 44));