// function bookPurchasing(hargaBuku, persentaseDiskon, persentasePajak, jumlahPembelian) {
//     if (jumlahPembelian <= 0) {
//         return false;
//     } else if (jumlahPembelian > alchemist.stock) {
//         return 'Stock Tidak mencukupi'
//     } 
//     const persen = 100;
//     const besarDiskon = persentaseDiskon/persen;
//     const besarPajak = persentasePajak/persen;
//     let dapatDiskonTambahan = false;
//     const diskonTambahan = (jumlahPembelian == alchemist.stock) ? dapatDiskonTambahan = true : dapatDiskonTambahan = false;
//     // const pesanDiskonTambahan = (diskonTambahan == true) ? console.log('Selamat Anda dapat diskon tambahan') : console.log('Anda perlu menambah item untuk mendapat diskon tambahan');
//     const tambahanDiskon = (dapatDiskonTambahan == true) ? besarDiskon + (5/100) : besarDiskon + 0;
//     console.log(tambahanDiskon);
//     const jumlahDiskon = (tambahanDiskon * alchemist.price * jumlahPembelian);
//     const totalHarga = alchemist.price * jumlahPembelian - jumlahDiskon;
//     const jumlahPajak = (besarPajak * totalHarga)
//     const total = totalHarga + jumlahPajak
//     // console.log(pesanDiskonTambahan);
//     if (dapatDiskonTambahan == true) {
//         const pesanSpesial = `Total belanja anda untuk ${jumlahPembelian} buku ${alchemist.title} adalah ${total} dengan diskon ${jumlahDiskon} dan pajak ${jumlahPajak} dengan diskon tambahan sebesar 5%`;
//         alchemist.stock -= jumlahPembelian
//         return pesanSpesial;
//     } else {
//         const pesan = `Total belanja anda untuk ${jumlahPembelian} buku ${alchemist.title} adalah ${total} dengan diskon ${jumlahDiskon} dan pajak ${jumlahPajak}`
//         alchemist.stock -= jumlahPembelian
//         return pesan
//     }
// }

// console.log(bookPurchasing(alchemist.price, 10, 5, 5));

// console.log(alchemist.stock);

// console.log(bookPurchasing(alchemist.price, 5, 10, 4));

// const jumlah5 = (x, y) => x + y;

// console.log(jumlah5(4, 3))

// const book = {
//     title : 'The Alchemist',
//     price : 100000,
//     stock : 5
// }

// const jumlah = 5;

// function bookPurchasing(bookPrice, besarDiskon, besarPajak) {
//     if (jumlah <= 0) {
//         return false;
//     } 

//     if (jumlah > book.stock) {
//         return 'Stock Tidak mencukupi'
//     }
//     const tambahanDiskon = (jumlah == 5) ? besarDiskon + 5 : besarDiskon + 0;
//     const totalHarga = book.price * jumlah - (tambahanDiskon/100 * book.price * jumlah);
//     const total = totalHarga + (besarPajak/100 * totalHarga);
//     // console.log(totalHarga)
//     return total
// }

// console.log(bookPurchasing(book.price, 5, 10));

// const alchemist = {
//     title : 'The Alchemist',
//     price : 100000,
//     stock : 5
// }

// const secret = {
//     title : 'The Secret',
//     price : 120000,
//     stock : 5
// }

// // const jumlahPembelian = 3;

// function bookPurchasing(hargaBuku, persentaseDiskon, persentasePajak, jumlahPembelian) {
//     if (jumlahPembelian <= 0) {
//         return false;
//     } else if (jumlahPembelian > alchemist.stock) {
//         return 'Stock Tidak mencukupi'
//     } 
//     const persen = 100;
//     const besarDiskon = persentaseDiskon/persen;
//     const besarPajak = persentasePajak/persen;
//     let dapatDiskonTambahan = false;
//     const diskonTambahan = (jumlahPembelian == alchemist.stock) ? dapatDiskonTambahan = true : dapatDiskonTambahan = false;
//     const pesanDiskonTambahan = (diskonTambahan == true) ? console.log('Selamat Anda dapat diskon tambahan') : console.log('Anda perlu menambah item untuk mendapat diskon tambahan');
//     const tambahanDiskon = (jumlahPembelian == alchemist.stock) ? besarDiskon + (5/100) : besarDiskon + 0;
//     const jumlahDiskon = (tambahanDiskon * alchemist.price * jumlahPembelian);
//     const totalHarga = alchemist.price * jumlahPembelian - jumlahDiskon;
//     const jumlahPajak = (besarPajak * totalHarga)
//     const total = totalHarga + jumlahPajak
//     // console.log(pesanDiskonTambahan);
//     if (jumlahPembelian == alchemist.stock) {
//         alchemist.stock -= jumlahPembelian
//         return `Total belanja anda untuk ${jumlahPembelian} buku ${alchemist.title} adalah ${total} dengan diskon ${jumlahDiskon} dan pajak ${jumlahPajak} dengan diskon tambahan sebesar 5%`
//     } else {
//         alchemist.stock -= jumlahPembelian
//         return `Total belanja anda untuk ${jumlahPembelian} buku ${alchemist.title} adalah ${total} dengan diskon ${jumlahDiskon} dan pajak ${jumlahPajak}`
//     }
// }

// console.log(bookPurchasing(alchemist.price, 5, 10, 5));

// console.log(alchemist.stock);

// console.log(bookPurchasing(alchemist.price, 5, 10, 4));

// const bookPurchasing = (hargaBuku, persentaseDiskon, persentasePajak, jumlahPembelian) => {
//     if (jumlahPembelian <= 0) {
//         return false;
//     } else if (jumlahPembelian > alchemist.stock) {
//         return 'Stock Tidak mencukupi'
//     } 
//     const persen = 100;
//     const besarDiskon = persentaseDiskon/persen;
//     const besarPajak = persentasePajak/persen;
//     let dapatDiskonTambahan = false;
//     const diskonTambahan = (jumlahPembelian == alchemist.stock) ? dapatDiskonTambahan = true : dapatDiskonTambahan = false;
//     const pesanDiskonTambahan = (diskonTambahan == true) ? console.log('Selamat Anda dapat diskon tambahan') : console.log('Anda perlu menambah item untuk mendapat diskon tambahan');
//     const tambahanDiskon = (jumlahPembelian == alchemist.stock) ? besarDiskon + (5/100) : besarDiskon + 0;
//     const jumlahDiskon = (tambahanDiskon * alchemist.price * jumlahPembelian);
//     const totalHarga = alchemist.price * jumlahPembelian - jumlahDiskon;
//     const jumlahPajak = (besarPajak * totalHarga)
//     const total = totalHarga + jumlahPajak
    // console.log(pesanDiskonTambahan);
//     if (jumlahPembelian == alchemist.stock) {
//         alchemist.stock -= jumlahPembelian
//         return `Total belanja anda untuk ${jumlahPembelian} buku ${alchemist.title} adalah ${total} dengan diskon ${jumlahDiskon} dan pajak ${jumlahPajak} dengan diskon tambahan sebesar 5%`
//     } else {
//         alchemist.stock -= jumlahPembelian
//         return `Total belanja anda untuk ${jumlahPembelian} buku ${alchemist.title} adalah ${total} dengan diskon ${jumlahDiskon} dan pajak ${jumlahPajak}`
//     }
// }

// console.log(bookPurchasing(alchemist.price, 5, 10, 5));

// console.log(alchemist.stock);

// console.log(bookPurchasing(alchemist.price, 5, 10, 4));

const alchemist = {
    title : 'The Alchemist',
    price : 100000,
    stock : 5
}

const secret = {
    title : 'The Secret',
    price : 120000,
    stock : 5
}

function bookPurchasing(hargaBuku, persentaseDiskon, persentasePajak, stock, jumlahPembelian) {
    if (jumlahPembelian <= 0) {
        return false;
    } 
    if (jumlahPembelian > stock) {
        return 'Stock Tidak mencukupi';
    }

    const persen = 100;
    const besarDiskon = persentaseDiskon/persen;
    const besarPajak = persentasePajak/persen;
    let dapatDiskonTambahan = false;
    const diskonTambahan = (jumlahPembelian == alchemist.stock) ? dapatDiskonTambahan = true : dapatDiskonTambahan = false;
    const tambahanDiskon = (jumlahPembelian == alchemist.stock) ? besarDiskon + (5/100) : besarDiskon + 0;
    const jumlahDiskon = (tambahanDiskon * hargaBuku * jumlahPembelian);
    const totalHarga = hargaBuku * jumlahPembelian - jumlahDiskon;
    const jumlahPajak = (besarPajak * totalHarga);
    const total = totalHarga + jumlahPajak;
    const pesan = `Total belanja anda untuk ${jumlahPembelian} buku ${alchemist.title} adalah ${total} dengan diskon ${jumlahDiskon} dan pajak ${jumlahPajak}`;

    console.log(pesan)
    console.log(stock)
    
    for (let i = 0; i < jumlahPembelian; i++) {
        if (stock <= 0) {
            console.log(`'${bookTitle}' is out of stock.`);
            break; // Exit the loop if stock is zero
        }
        stock=-jumlahPembelian;
    }
    
    if (stock > 0) {
        console.log(`You can purchase ${stock} more copies of '${bookTitle}'.`);
    }
}

console.log(bookPurchasing(alchemist.price, 5, 10, alchemist.stock, 5));
console.log(alchemist.stock);


