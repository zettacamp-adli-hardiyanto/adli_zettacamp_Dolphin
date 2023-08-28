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

const jumlahPembelian = 5;


function bookPurchasing(hargaBuku, persentaseDiskon, persentasePajak) {
    if (jumlahPembelian <= 0) {
        return false;
    } 
    if (jumlahPembelian > alchemist.stock) {
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
    alchemist.stock -= jumlahPembelian; 
    // alchemist.stock = alchemist.stock - jumlahPembelian; 
    // console.log(tambahanDiskon)
    // console.log(jumlahDiskon)
    // console.log(jumlahPajak)
    // console.log(totalHarga)
    // console.log(dapatDiskonTambahan);
    return pesan
}

console.log(bookPurchasing(alchemist.price, 5, 10));
console.log(alchemist.stock);

// console.log(bookPurchasing(alchemist.price, 5, 10));

