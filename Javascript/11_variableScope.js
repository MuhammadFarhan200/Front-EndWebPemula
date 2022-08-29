// Variabel yang dapat di akses dari seluruh script disebut dengan “globally scoped,” sementara
// variabel yang hanya dapat diakses hanya pada function tertentu disebut dengan “locally scoped.”

// Berikut variabel yang dapat diakses dalam sebuah fungsi:

// - Variabel argumen dari fungsinya.
// - Lokal variabel yang didefinisikan pada fungsinya.
// - Variabel dari induk fungsinya.
// - Global variabel.

// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

// tabrakan variabel disebut (collision)