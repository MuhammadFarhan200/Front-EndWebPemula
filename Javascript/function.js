// function merupakan sebuah variabel yang berisi block logika, dan block logika tersebut
// akan dieksekusi ketika variabelnya dipanggil.

// Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi,
// lalu terdapat sepasang kurung kurawal yang berisi logika dari fungsi tersebut.
function methodName(parameters) {
    // body
}

// di dalam tanda kurung kita membutuhkan sebuah informasi tambahan yang disebut dengan arguments.
// Argument merupakan data yang digunakan pada fungsi yang dapat mempengaruhi perilaku dari fungsinya
// tersebut.

// Terdapat dua tipe fungsi pada JavaScript, yakni native function dan custom function.

// Native function merupakan fungsi yang sudah terdapat pada JavaScript atau Browser
// sehingga kita tidak perlu membuat hanya tinggal menggunakan saja.
// Contohnya alert(), confirm(), Date(), parseInt() dll.

// Custom function merupakan fungsi yang kita buat sendiri
function greeting(name, language) {
    if (language === "English") {
        console.log("Good Morning " + name + "!");
    } else if (language === "French") {
        console.log("Bonjour " + name + "!");
    } else {
        console.log("Selamat Pagi " + name + "!");
    }
}
// arguments
greeting("Harry", "French");

/* output
Bonjour Harry!
*/

// function dapat mengembalikan sebuah nilai.
// Untuk membuat nilai kembalian dari fungsi gunakan keyword return
// diikuti dengan nilai yang akan dikembalikan.
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2);
console.log(result);

/* output
20
*/

function greeting2(user, lang) {
    if (lang === "English") {
        return "Good Morning " + user + "!";
    } else if (lang === "French") {
        return "Bonjour " + user + "!";
    } else if (lang === "Japanese") {
        return "Ohayouu " + user + "!";
    } else {
        return "Selamat Pagi " + user + "!";
    }
}

let greetingMessage2 = greeting2("Harry", "Japanese");
console.log(greetingMessage2);

function multiply(a, b) {
    return a * b;
}

let hasil = multiply(10, 2);
console.log(hasil);

/* Output:
20
*/
