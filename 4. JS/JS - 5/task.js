const alchemist = {
    title : 'The Alchemist',
    author : 'Paulo Coelho',
    price : 100000,
    stock : 5
}


function bookPurchasing(hargaBuku, persentaseDiskon, persentasePajak, stock, jumlahPembelian, lamaKredit) {
    if (jumlahPembelian <= 0) {
        return false;
    } 

    if (jumlahPembelian > stock) {
        console.log('Stock Tidak mencukupi') ;
    }

    let stockBaru = alchemist.stock
    const persen = 100;
    const besarDiskon = persentaseDiskon/persen;
    const besarPajak = persentasePajak/persen;
    const tambahanDiskon = (jumlahPembelian == stock) ? besarDiskon + (5/100) : besarDiskon + 0;
    const jumlahDiskon = (tambahanDiskon * hargaBuku * jumlahPembelian);
    const totalHarga = hargaBuku * jumlahPembelian - jumlahDiskon;
    const jumlahPajak = (besarPajak * totalHarga);
    const total = totalHarga + jumlahPajak;
    stockBaru -= jumlahPembelian; 

    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 28);
    const dueDates = Array.from({ length: lamaKredit }, (_, index) => {
        const dueDate = new Date(nextMonth);
        dueDate.setMonth(nextMonth.getMonth() + index);
        return dueDate.toLocaleDateString('Id-id', {weekday: "long", day: "numeric", month: "long",  year: "numeric" });
    });
    // dueDates.forEach((item, index, array) => {console.log(`a[${index}] = ${item}`)})


    for (let i = 1; i < jumlahPembelian; i++) {
        if (stock <= 0) {
            console.log('Is out of stock.');
            break; // Exit the loop if stock is zero
        }
        stock--
    }

    if (stock <= 0) {
        return 'Tunggu Barang Datang'
    } else {
        const resultsArray = [
            "Book Details:",
            "Title: " + alchemist.title,
            "Author: " + alchemist.author,
            "Price: Rp" + totalHarga,
            "Discount Percentage: " + persentaseDiskon + "%",
            "Tax Percentage: " + persentasePajak + "%",
            "",
            "Purchasing Details:",
            "Discount Amount: Rp" + jumlahDiskon,
            "Price After Discount: Rp" + totalHarga,
            "Tax Amount: Rp" + jumlahPajak,
            "Price After Tax: Rp" + total,
            "",
            "Due Dates for Credit:"
        ];
        resultsArray.push(...dueDates.map((dueDate, index) => `Bulan ${index + 1}: ${dueDate}`));
        return resultsArray;
    }
}

console.log(bookPurchasing(alchemist.price, 5, 10, alchemist.stock, 5, 5));

// const creditDate = 5;
// const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// monthValue = [];
// for (let i = 0; i<creditDuration; i++) {
// const countMonth = (i+8)%12;
// monthName[countMonth];
// const countYear = 2023+Math.floor((8+i)/12);
// monthValue.push(creditDate + ' ' + monthName[countMonth] + ' ' + countYear);
// }