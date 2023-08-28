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
        console.log('Stock Tidak mencukupi') ;
    }

    const persen = 100;
    const besarDiskon = persentaseDiskon/persen;
    const besarPajak = persentasePajak/persen;
    let dapatDiskonTambahan = false;
    const diskonTambahan = (jumlahPembelian == stock) ? dapatDiskonTambahan = true : dapatDiskonTambahan = false;
    const tambahanDiskon = (jumlahPembelian == stock) ? besarDiskon + (5/100) : besarDiskon + 0;
    const jumlahDiskon = (tambahanDiskon * hargaBuku * jumlahPembelian);
    const totalHarga = hargaBuku * jumlahPembelian - jumlahDiskon;
    const jumlahPajak = (besarPajak * totalHarga);
    const total = totalHarga + jumlahPajak;
    alchemist.stock -= jumlahPembelian; 

    for (let i = 1; i < jumlahPembelian; i++) {
        if (stock - jumlahPembelian <= 0) {
            console.log('Out of stock.');
            break; // Exit the loop if stock is zero
        }
        // console.log('Pembelian berhasil')
        stock--
    }

    if (stock <= 0) {
        return 'Tunggu Barang Datang'
    } else {
        const pesan = `Total belanja anda untuk ${jumlahPembelian} buku ${alchemist.title} adalah ${total} dengan diskon ${jumlahDiskon} dan pajak ${jumlahPajak}`;
        return pesan
    }
}

console.log(bookPurchasing(alchemist.price, 5, 10, alchemist.stock, 5));
console.log(alchemist.stock);
console.log(bookPurchasing(alchemist.price, 5, 10, alchemist.stock, 5));
// console.log(bookPurchasing(alchemist.price, 5, 10, alchemist.stock, 2));
// console.log(alchemist.stock);
