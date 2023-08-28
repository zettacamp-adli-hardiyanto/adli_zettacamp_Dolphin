let favBooksFirst = 'The Alchemist';
const favBooksSecond = 'The Alchemist';

const comparisonBook = favBooksFirst == favBooksSecond;

console.log(comparisonBook)

if (favBooksFirst == favBooksSecond) {
    console.log(true);
} else {
    console.log(false);
}

// if (favBooksFirst === favBooksSecond) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if (favBooksFirst != favBooksSecond) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if (favBooksFirst !== favBooksSecond) {
//     console.log(true);
// } else {
//     console.log(false);
// }

function bookComparison(a, b) {
    if (a == b) {
        return true
    } else {
        return false
    }
};

console.log(bookComparison(favBooksFirst, favBooksSecond));