const huruf = ["H", "E", "L", "L", "O"];
// Descending Order
const descOrder = huruf.sort((a, b) => (a > b ? -1 : 1));
console.log(descOrder);

const angka = [5, 4, 3, 2, 1];
// Descending Order
const ascOrder = angka.sort((a, b) => (a > b ? 1 : -1));
console.log(ascOrder);
