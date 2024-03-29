const todos = [];
// Variabel todos adalah sebuah variabel berisi array yang akan menampung beberapa object. Object ini berisikan data-data Todo user. 
const RENDER_EVENT = 'render-todo';
// Variabel RENDER_EVENT bertujuan untuk mendefinisikan Custom Event dengan nama 'render-todo'.

const SAVED_EVENT = 'saved-todo';
const STORAGE_KEY = 'TODO_APPS';

function isStorageExist() /* boolean */ {
    if (typeof (Storage) === undefined) {
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
    return true;
}

/**
 * agar dapat memudahkan dalam mengetahui bahwa pada setiap perubahan data bisa secara sukses memperbarui data pada storage, 
 * kita bisa menerapkan listener dari event SAVED_EVENT. Kemudian, di dalam event listener tersebut 
 * kita bisa memanggil getItem(KEY) untuk mengambil data dari localStorage, lalu bisa kita tampilkan secara sederhana menggunakan console log.
 */
document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(STORAGE_KEY));
});

function saveData() {
    // kode isStorageExist() berfungsi untuk mengembalikan nilai boolean untuk menentukan apakah memang benar didukung atau tidak.
    if (isStorageExist()) {
        // JSON.stringify berfungsi untuk mengkonversi data object ke string
        const parsed = JSON.stringify(todos);
        // Menyimpan data ke storage sesuai dengan key yang kita tentukan. Dalam hal ini key yang kita gunakan adalah "TODO_APPS" dalam variabel STORAGE_KEY.
        localStorage.setItem(STORAGE_KEY, parsed);
        // Untuk mempermudah debugging atau tracking ketika terjadi perubahan data, kita akan memanggil sebuah custom event baru yang bernama "saved-todo" dalam variabel SAVED_EVENT.
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

/**
 * Ambil data dari localStorage, data ini akan disediakan dalam format teks JSON.
 * Kemudian parse data JSON tadi menjadi sebuah object.
 * Lalu, masukkan satu persatu data dari object ke array todos.
 * Agar bisa diperbarui pada tampilan, panggil Event RENDER_EVENT.
 */
function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
        for (const todo of data) {
            todos.push(todo);
        }
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
}

/**
 * Kode di dibawah adalah sebuah listener yang akan menjalankan kode yang ada didalamnya ketika event DOMContentLoaded dibangkitkan 
 * alias ketika semua elemen HTML sudah dimuat menjadi DOM dengan baik.
 */
document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

function addTodo() {
    const textTodo = document.getElementById('title').value;
    /**
     * document.getElementById("title").value berfungsi untuk mengambil elemen <input> dengan id title 
     * dan memanggil properti value untuk mendapatkan nilai yang diinputkan oleh user.
     * 
     * Logika yang sama juga dilakukan pada input date.
     */
    const timestamp = document.getElementById('date').value;

    const generatedID = generateId();
    const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

// generateId() berfungsi untuk menghasilkan identitas unik pada setiap item todo.
function generateId() {
    // +new Date() berfungsi untuk mendapatkan timestamp pada JavaScript.
    return +new Date();
}

/**
 * generateTodoObject() berfungsi untuk membuat object baru dari data yang sudah disediakan dari inputan (parameter function), 
 * diantaranya id, nama todo (task), waktu (timestamp), dan isCompleted (penanda todo apakah sudah selesai atau belum).
 */
function generateTodoObject(id, task, timestamp, isCompleted) {
    return {
        id,
        task,
        timestamp,
        isCompleted
    }
}

document.addEventListener(RENDER_EVENT, function () {
    const uncompletedTODOList = document.getElementById('todos');
    /**
     * innerHTML = '' berfungsi untuk memastikan agar container dari todo bersih sebelum diperbarui
     * Sehingga dengan mengatur property tersebut, tidak terjadi duplikasi data ketika menambahkan elemen DOM yang baru dengan append().
     */
    uncompletedTODOList.innerHTML = '';

    const completedTODOlist = document.getElementById('completed-todos');
    completedTODOlist.innerHTML = '';

    for (const todoItem of todos) {
        const todoElement = makeTodo(todoItem);
        if (!todoItem.isCompleted) {
            uncompletedTODOList.append(todoElement);
        }
        else {
            // apabila ada todo yang sudah ditandai selesai, maka akan menampilkan todoElement pada halaman web.
            completedTODOlist.append(todoElement);
        }
    }
});
/**
 * Runtutan dari kode di atas adalah pertama elemen container dari todo kita ambil terlebih dahulu dari DOM. 
 * Setelah itu, lakukan iterasi pada variabel todos untuk mengambil beberapa data todo yang telah tersimpan.
 */

function makeTodo(todoObject) {
    const textTitle = document.createElement('h2');
    textTitle.innerText = todoObject.task;

    const textTimestamp = document.createElement('p');
    textTimestamp.innerText = todoObject.timestamp;

    const textContainer = document.createElement('div');
    /** 
     * classList merupakan property yang berfungsi untuk menerapkan style secara dinamis berdasarkan selector CSS
     * kita bisa menambahkan satu atau beberapa class dengan menggunakan classList.add().
    */
    textContainer.classList.add('inner');
    textContainer.append(textTitle, textTimestamp);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);
    /**
     * agar setiap todo item mudah di-track dan dikelola, kita perlu memberikan identitas (ID) unik pada setiap elemen todo tersebut
     */
    container.setAttribute('id', `todo-${todoObject.id}`);
    /**
     * Setiap iterasi yang dilakukan akan membuat satu elemen DOM, 
     * yakni sebagai hasil dari fungsi makeTodo() yang kemudian dimasukkan pada variabel DOM yang sudah ada pada tampilan web (uncompletedTODOList) 
     * melalui fungsi append(). Sehingga, elemen tersebut bisa langsung di-render oleh webpage.
     */

    if (todoObject.isCompleted) {
        // undoButton merupakan tombol untuk memindahkan todo dari selesai ke belum selesai
        const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');

        undoButton.addEventListener('click', function () {
            undoTaskFromCompleted(todoObject.id);
        });

        // trashButton merupakan tombol untuk menghapus todo
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');

        trashButton.addEventListener('click', function () {
            removeTaskFromCompleted(todoObject.id);
        });

        container.append(undoButton, trashButton);
    } else {
        // checkButton merupakan tombol untuk memindahkan todo dari rak “Yang harus dilakukan” ke rak “Yang sudah dilakukan”
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');

        checkButton.addEventListener('click', function () {
            addTaskToCompleted(todoObject.id);
        });

        container.append(checkButton);
    }

    return container;
}

/**
 * addTaskCompleted berfungsi memindahkan todo dari rak “Yang harus dilakukan” ke rak “Yang sudah dilakukan”.
 * Prinsipnya adalah merubah state isCompleted dari sebelumnya false ke true, 
 * kemudian panggil event RENDER_EVENT untuk memperbarui data yang ditampilkan.
 */
function addTaskToCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

// findTodo berfungsi untuk mencari todo dengan ID yang sesuai pada array todos.
function findTodo(todoId) {
    for (const todoItem of todos) {
        if (todoItem.id === todoId) {
            return todoItem;
        }
    }
    return null;
}

/**
 * undoTaskFromComleted berfungsi untuk memindahkan todo dari selesai ke belum selesai.
 * state isCompleted yang diubah nilainya ke false, hal ini bertujuan agar todo task yang sebelumnya completed (selesai), 
 * bisa dipindah menjadi incomplete (belum selesai).
 */
function undoTaskFromCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

/**
 * removeTaskFromComleted berfungsi untuk menghapus todo.
 * fungsi ini akan menghapus Todo berdasarkan index yang didapatkan dari pencarian Todo dengan menggunakan findTodoIndex(). 
 * Apabila pencarian berhasil, maka akan menghapus todo tersebut menggunakan fungsi splice() yang disediakan oleh JavaScript. 
 */
function removeTaskFromCompleted(todoId) {
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === -1) return;

    todos.splice(todoTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function findTodoIndex(todoId) {
    for (const index in todos) {
        if (todos[index].id === todoId) {
            return index;
        }
    }

    return -1;
}