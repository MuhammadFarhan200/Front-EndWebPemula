const angka = [1, 1, 1, 0, 0, 1, 1];

const filteredArray = angka.filter((item) => item === 1);

console.log(filteredArray);

var input = ["s", "u", "r", "a", "k", "a", "r", "t", "a"];

var duplicates = input.reduce(function (acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
    return acc;
}, []);

console.log(duplicates);
