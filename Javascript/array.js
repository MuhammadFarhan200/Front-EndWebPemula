/* === ARRAYS === */

/* Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dari tipe data lain dengan menempatkannya pada satu variabel. */

let myArrayy = ["Coklat", 42.5, 22, true, "Programming"];
myArrayy.push("JavaScript");
// Fungsi push ini akan menambahkan data di akhir array.
myArrayy.pop();
// untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().
myArrayy.shift();
myArrayy.unshift("Apple");
// Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.
delete myArrayy[1];
// Keyword delete berfungsi untuk menghapus data dari array
// Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.
myArrayy.splice(2, 1);
// Untuk menghapus elemen, gunakan metode splice()
console.log(myArrayy);
/* output:
[ 'Coklat', 42.5, 22, true, 'Programming' ]
*/
/* Nilai - nilai yang berada pada array disusun dan diakses secara indexing. Nilai index dimulai dari angka 0 */

let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/* output:
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

/* === OBJEK === */
/* Objek serupa dengan array yang dapat menampung banyak nilai dengan tipe data yang beragam. Untuk mengelola data menggunakan objek, bedanya objek diakses tidak melalui indexing,  melainkan menggunakan pendekatan key-value. Untuk mengakses nilainya kita gunakan key. Key juga biasa disebut dengan properti.

   Untuk menetapkan objek pada variabel gunakan tanda kurung kurawal { } dalam menginisialisasinya. Kemudian di dalamnya kita tetapkan key: value. */

let object = { key1: "value1", key2: "value2", key3: "value3" };
let user = {
    firstName: "Harry",
    lastName: "Potter",
    age: 20,
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"],
};

/* Untuk mengakses nilai dari properti objek kita dapat gunakan tanda titik diikuti dengan nama properti-nya. */
console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");
/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/

/* Dalam properti objek, kita dapat menyimpan nilai objek lainnya, sehingga dapat dikelompokan kembali dalam sebuah objek baru */

let user1 = {
    name: {
        first: "Harry",
        last: "Potter",
    },
    age: 20,
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"],
};
/* Untuk mendapatkan nilainya kita perlu mengakses properti dari objek user kemudian name */
console.log("Hallo, nama saya " + user1.name.first + " " + user1.name.last);
console.log("Umur saya " + user1.age + " tahun");
/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/
