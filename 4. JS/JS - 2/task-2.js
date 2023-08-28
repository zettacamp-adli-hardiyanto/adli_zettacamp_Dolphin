const favBooksFirstPrice = 500000;
const favBooksSecondPrice = 500000;

// Highest Price
function highestPrice(a, b) {
    if (a < b) {
        return b
    } else if ( a == b) {
        return 'Sama'
    } else {
        return a
    }
}

console.log(highestPrice(favBooksFirstPrice, favBooksSecondPrice));

console.log(Math.max(favBooksFirstPrice, favBooksSecondPrice));

// Average Price
const averagePrice = (favBooksFirstPrice + favBooksSecondPrice)/2;

console.log(averagePrice);

// Ternary Operator 
let result =
    (averagePrice > 500000) ? "Expensive" : "Cheap";
console.log(result);

// Create new key
const id = {nama: 'Adi'};

id.weight = 60;

id['height'] = 170;

console.log(id);

// Push object into array

const identitasSiswa = [
    {
        nama: 'Adli',
        berat: 60,
        tinggi: 170
    },
]

const siswa1 = { nama: 'Maman', berat: 65, tinggi: 180};
const siswa2 = { nama: 'Yudhi', berat: 62, tinggi: 178};
const siswa3 = { nama: 'Budi', berat: 68, tinggi: 165};

identitasSiswa.push(siswa1, siswa2, siswa3);

console.log(identitasSiswa);

identitasSiswa.splice(4, 0, { nama: 'Ahmad', berat: 70, tinggi: 168})

console.log(identitasSiswa);

function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
}
  
console.log(getRectArea(3, 4));