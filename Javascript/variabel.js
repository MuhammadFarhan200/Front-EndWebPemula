/* Hal yang Harus Diketahui terkait Variabel JS
1. Harus dimulai dengan huruf atau underscore (_).
2. Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
3. Tidak dapat mengandung spasi (white space), jika penamaan variabel lebih dari dua kata maka tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
4. Tidak dapat mengandung karakter spesial (! . , / \ + * = dll.) */

var firstName = "Harry";
console.log(firstName);

// Mengubah Nilai Variabel firtsName yang Diinisialisasikan var
firstName = "Ron";
console.log(firstName);

/* output: 
Harry
Ron
*/

/* Variabel yang dideklarasikan menggunakan var ini dapat diberikan nilai terlebih dahulu sebelum dideklarasikan. Atau bisa disebut Hoisting (Mengangkat) */
x = 100;
var x;
console.log(x);
/* output: 100 */
/* Dikarenakan proses hoisting, sebenarnya di belakang layar deklarasi variabel x (var x) diangkat ke atas */

// Variable let 
let y = 100;
console.log(y);

// Variable Const
const z = 50;
console.log(z);
/* const digunakan untuk mendeklarasikan sebuah variabel yang sifatnya immutable atau tidak perlu diubah nilainya. */