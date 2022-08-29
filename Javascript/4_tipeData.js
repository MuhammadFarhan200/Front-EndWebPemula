/* === Undefined === */
/* Tipe Data yang tidak memiliki nilai */
let x;
console.log(typeof x);
/* output: undefined */
/* Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks */

/* === Number === */
/* Tipe Data bernilai angka */
let o = 10.12;
console.log(typeof o);
/* output: number */

/* == Operator Tipe Data Number == */

let a = 12;
let b = 9;

// Penambahan
console.log(a + b);
// Pengurangan
console.log(a - b);
// Perkalian
console.log(a * b);
// Pembagian
console.log(a / b);
// Sisa Hasil Bagi (Modulus)
console.log(a % b);
/* output:
21
3
108
1.3333333333333333
3
*/

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
/* Jika dituliskan setelah variabel (x++), statement akan menghasilkan nilai variabel sebelum ditingkatkan nilainya. */

let prefix = 5;
console.log(++prefix);
/* output: 6 */
/* Jika dituliskan sebelum variabel (++x), statement akan menghasilkan nilai variabel setelah ditingkatkan nilainya. */

/* === Strigs === */
/* Tipe Data bernilai teks, Menggunakan tanda sigle quote (') / double quote (") diantara teksnya untuk menetapkan nilainya */
let greet = "Hello";
console.log(typeof greet);
/* output: string */

let moreGreet = greet + greet;
console.log(moreGreet);
/* output: HelloHello */
/* Operator plus (+) pada strings berfungsi untuk menggabungkan dua teks yang terpisah menjadi satu buah teks. */

/* === Boolean === */
/* Boolean hanya dapat memiliki dua nilai, yakni true atau false */
let c = true;
let d = false;

console.log(typeof c);
console.log(typeof d);
/* output: 
boolean
boolean
*/

/* Atau kita bisa gunakan operator komparasi seperti lebih dari (>) atau kurang dari (<). */
const k = 10;
const l = 12;

let isGreater = k > l;
let isLess = k < l;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/

/* === Null === */
/* Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel. */
let someLaterData = null;
console.log(someLaterData);
/* output:
null
*/

/* variabel pada JavaScript memiliki sifat tipe data yang dinamis. Artinya, kita dapat memberikan tipe data yang berubah-ubah pada satu variabel yang sama. */
let q; // q merupakan undefined
q = 1; // sekarang q merupakan number
q = true; // sekarang q merupakan boolean
q = "Harry"; // sekarang q merupakan string

console.log(q);

/* === BigInt === */
//  Pada JavaScript, tipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1).
//  Untuk membedakan tipe BigInt dan Number, tambahkan karakter n di akhir angka.
const bigNumber = 10000000000000000000000000198398728387458368764765434534321n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* Output:
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

/* === Symbol === */
// Symbol adalah tipe data baru yang dikenalkan pada ES6. Tipe data Symbol digunakan untuk menunjukkan identifier yang unik.
// Symbol ini umumnya digunakan sebagai nama properti dari Object. Object sendiri merupakan tipe data kompleks untuk menyimpan berbagai struktur data.
const id = Symbol("id");

console.log(id);

/* Output:
Symbol(id)
*/

// Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda.
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* Output:
false
*/

/* === Turhty and Falsy === */

/**
 * Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy.
 * Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false.
 * Jadi manakah yang termasuk truthy dan falsy? Selain nilai boolean false, tipe data atau nilai yang dianggap falsy,
 *
 * antara lain:
 * Number 0
 * BigInt 0n
 * String kosong seperti “” atau ‘’
 * null
 * undefined
 * NaN, atau Not a Number
 */
