// getElementById()
document.getElementById("display");
// Mengembalikkan satu elemen yang memiliki nilai id 'display'.

// getElementByName()
document.getElementsByName("button");
// Mengembalikan banyak elemen (HTML Collection) yang memiliki attribute name dengan nilai 'button'

// getElementsByClassName
document.getElementsByClassName("button");
// Mengembalikan banyak elemen (HTML Collection) yang memiliki attribute class dengan nilai 'button'

// getElementsByTagName
document.getElementsByTagName("div");
// Mengembalikan banyak elemen (HTML Collection) yang merupakan 'div' element

// querySelector
document.querySelector(".button");
// Mengembalikkan elemen pertama (node) yang menerapkan class 'button'

// querySelctorAll
const buttons = document.querySelectorAll(".button");
// Mengembalikkan semua elemen (node) yang menerapkan class 'button' dalam bentuk HTMLCollection

const buttonKedua = buttons[1];
// Mengembalikkan elemen dengan class 'button' yang berada pada urutan indeks ke 1 pada HTMLCollection

const buttonElement = buttonKedua.children[0];
// Mengembalikan child element yang terdapat di dalam tag <button> dalam bentuk HTMLCollection

// createElement
let newElement = document.createElement("p");
// Membuat elemen HTML

// innerText
newElement.innerText = "Selamat Datang";
// Menambahkan teks pada elemen HTML

// innerHTML
newElement.innerHTML = '<i>Selamat Datang</i>';
// Mengembalikan konten sebuah elemen beserta tag HTML-nya
// Dengan melakukan assignment ke properti ini kita bisa menyertakan tag HTML dan merendernya dengan mudah melalui string.

// style.property
newElement.style.fontWeight = 'bold';
// Mengubah styling sebuah elemen

// appenChild
const daftar = document.getElementById('daftar');
daftar.appendChild(newElement);
// Menambahkan atau menyisipkan sebuah child elemen ke bagian akhir dari sebuah elemen

// insertBefore
daftar.insertBefore(elemenBaru, elemenAcuan);
// Menyisipkan elemen sebelum child elemen tertentu dalam parent element

// setAttribute
newElement.setAttribute("class", "paragraf");
// Memberikan attribute pada elemen HTML
