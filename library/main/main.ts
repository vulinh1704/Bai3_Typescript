import {Book} from "../model/book";
import {DocumentManager} from "../service/doccumentManager";

let input = require('readline-sync');
let listDoc: DocumentManager = new DocumentManager();

function mainMenu() {
    let menu = `
    1.Them tai lieu
    2.Xoa tai lieu
    3.Sua tai lieu
    4.Hien thi tai lieu
    5.Hien thi sach
    6.Hien thi tap chi
    0.Thoat`
    console.log(menu)
}

function addMenu() {
    let choice: number;
    do {
        let menu = `
        1.Them sach
        2.Them tap chi
        0.Thoat
        `
        console.log(menu);
        choice = +input.question("Nhap cua lua chon cua ban ? : ")
        switch (choice) {
            case 1:
                addBook();
                break;
            case 0:
                main();
                break;
        }
    } while (choice != 0);
}

function addBook() {
    let id = +input.question("Nhap id : ");
    let producer = input.question("Nha xuat ban: ");
    let quantity = +input.question("So luong: ");
    let page = +input.question("So trang");
    let author = input.question("Tac gia");
    let book: Book = new Book(id, producer, quantity, page, author)
    listDoc.add(book);
}

function show() {
    console.log(listDoc.showAll());
}

function deleteMenu() {
    let id = +input.question("Nhap id can xoa: ");
    listDoc.delete(id);
    main();
}

function editMenu() {
    let id = input.question("Nhap id can sua : ");

    let producer = input.question("Nha xuat ban: ");
    let quantity = +input.question("So luong: ");
    let page = +input.question("So trang");
    let author = input.question("Tac gia");
    let book: Book = new Book(id, producer, quantity, page, author);
    listDoc.edit(id ,book);
}

function showListBook(){
    console.log(listDoc.findByType(5));
    main();
}

function main() {
    let choice: number;
    do {
        mainMenu();
        choice = +input.question("Nhap lua chon cua ban ? : ")
        switch (choice) {
            case 1:
                addMenu();
                break;
            case 2:
                deleteMenu();
                break;
            case 3:
                editMenu();
                break;
            case 4:
                show();
                break;
            case 5:
                showListBook();
                break;

        }
    } while (choice != 0);
}

main();