const user = {
    firstName: "Hinata",
    lastName: "Shoyou",
    age: 19,
    isJedi: true,
    "home world": "Karasuno",
};
console.log("Halo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");
console.log("Saya berasal dari " + user["home world"]);

/* Output:
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray",
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";

delete spaceship.manufacturer;

console.log(spaceship);

/* Output:
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}
 */

/**
 * Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai.
 * Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya.
 * Berbeda jika kita menginisialisasi ulang variabel dari object.
 * Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, maka nilai di dalamnya akan tergantikan dengan nilai yang baru.
 * Sedangkan, jika property dengan nama key yang ditentukan tidak ditemukan, maka properti baru akan ditambahkan ke object.
 */
