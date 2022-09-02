const books = [];

const RENDER_EVENT = 'render-book';
const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'BOOKSHELF_APPS';

function isStorageExist() /* boolean */ {
    if (typeof (Storage) === undefined) {
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
    return true;
}

document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(STORAGE_KEY));
});

function saveData() {
    if (isStorageExist()) {
        const parsed = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
        for (const book of data) {
            books.push(book);
        }
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
}


document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('input-book');
    const formSearch = document.getElementById("search-book");
    const checkComplete = document.getElementById('input-book-isCompleted');

    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addBook();

        document.getElementById("input-book-title").value = "";
        document.getElementById("input-book-penulis").value = "";
        document.getElementById("input-book-tahun").value = "";
        document.getElementById("input-book-isCompleted").checked = false;
    });

    checkComplete.addEventListener("input", function (event) {
        event.preventDefault();
        checkButton();
    });

    formSearch.addEventListener("submit", function (event) {
        event.preventDefault();

        bookSearch();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

function addBook() {
    const titleBook = document.getElementById('input-book-title').value;
    const penulisBook = document.getElementById('input-book-penulis').value;
    const tahun = document.getElementById('input-book-tahun').value;
    const isComplete = document.getElementById("input-book-isCompleted").checked;

    const generatedID = generateId();
    const bookObject = generatebookObject(generatedID, titleBook, penulisBook, tahun, isComplete);
    books.push(bookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function generateId() {
    return +new Date();
}

function generatebookObject(id, title, author, year, isComplete) {
    return {
        id,
        title,
        author,
        year,
        isComplete
    }
}

document.addEventListener(RENDER_EVENT, function () {
    const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    incompleteBookshelfList.innerHTML = '';

    const completeBookshelfList = document.getElementById('completeBookshelfList');
    completeBookshelfList.innerHTML = '';

    for (const bookItem of books) {
        const bookElement = makeBook(bookItem);
        if (!bookItem.isComplete) {
            incompleteBookshelfList.append(bookElement);
        }
        else {
            completeBookshelfList.append(bookElement);
        }
    }
});

function makeBook(bookObject) {
    const textTitle = document.createElement('h2');
    textTitle.innerText = bookObject.title;

    const textAuthor = document.createElement('p');
    textAuthor.innerText = bookObject.author;

    const textYear = document.createElement('p');
    textYear.innerText = bookObject.year;

    const textContainer = document.createElement('div');

    textContainer.append(textTitle);
    textContainer.append(textAuthor);
    textContainer.append(textYear);

    const container = document.createElement('div');
    container.classList.add('book-item');
    container.append(textContainer);

    container.setAttribute('id', `book-${bookObject.id}`);

    if (bookObject.isComplete) {
        const belumDibaca = document.createElement('button');
        belumDibaca.classList.add('button-belum-dibaca');
        belumDibaca.innerText = 'Belum Dibaca';

        belumDibaca.addEventListener('click', function () {
            undoBookFromCompleted(bookObject.id);
        });

        const hapusBuku = document.createElement('button');
        hapusBuku.classList.add('button-hapus-buku');
        hapusBuku.innerText = 'Hapus Buku';

        hapusBuku.addEventListener('click', function () {
            removeBookFromCompleted(bookObject.id);
        });

        container.append(belumDibaca);
        container.append(hapusBuku);
    } else {
        const sudahDibaca = document.createElement('button');
        sudahDibaca.classList.add('button-sudah-dibaca');
        sudahDibaca.innerText = 'Sudah Dibaca';

        sudahDibaca.addEventListener('click', function () {
            addBookToCompleted(bookObject.id);
        });

        const hapusBuku = document.createElement('button');
        hapusBuku.classList.add('button-hapus-buku');
        hapusBuku.innerText = 'Hapus Buku';

        hapusBuku.addEventListener('click', function () {
            removeBookFromCompleted(bookObject.id);
        });

        container.append(sudahDibaca, hapusBuku);
    }

    return container;
}

function addBookToCompleted(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function findBook(bookId) {
    for (const bookItem of books) {
        if (bookItem.id === bookId) {
            return bookItem;
        }
    }
    return null;
}

function undoBookFromCompleted(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function removeBookFromCompleted(bookId) {
    const bookTarget = findBookIndex(bookId);

    if (bookTarget === -1) return;

    books.splice(bookTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function findBookIndex(bookId) {
    for (const index in books) {
        if (books[index].id === bookId) {
            return index;
        }
    }

    return -1;
}

function bookSearch() {
    const searchBook = document.getElementById("search-book-title");
    const filter = searchBook.value.toUpperCase();
    const bookItem = document.querySelectorAll(".book-shelf > .book_list > .book-item");
    for (let i = 0; i < bookItem.length; i++) {
        txtValue = bookItem[i].textContent || bookItem[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            bookItem[i].style.display = "";
        } else {
            bookItem[i].style.display = "none";
        }
    }
}

function checkButton() {
    const checkComplete = document.getElementById('input-book-isCompleted');
    const check = document.querySelector("span");
    if (checkComplete.checked) {
        check.innerText = "Selesai dibaca";
    } else {
        check.innerText = "Belum selesai dibaca";
    }
}