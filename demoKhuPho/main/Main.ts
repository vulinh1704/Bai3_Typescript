import {Street} from "../model/Street";
import {Family} from "../model/Family";
import {Person} from "../model/Person";

let street: Street = new Street(1, "A");
let input = require('readline-sync');

function start() {
    let menu = `---------Menu khu phố-----------\n1.Thêm nhà\n2.Danh sách nhà\n3.Danh sách nhà lớn hơn 2 thành viên\n4.Hiển thị Ninh\n0.Thoát`
    let choice;
    do {
        console.log(menu);
        choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1:
                addFamily();
                break;
            case 2:
                showFamilies();
                break;
            case 3:
                showInfoFamily();
                break;
            case 4:
               showNinh();
                break;
        }
    } while (choice != 0);
}

function showNinh() {
    street.findA();
}

function showInfoFamily() {
    let families = street.findMemberThan2();
    for (let i = 0; i < families.length; i++) {
        console.log(`Nhà ${families[i].id} có thành viên `)
        for (let j = 0; j < families[i].listPerson.length; j++) {
            console.log(`tên : ${families[i].listPerson[j].name}`)
        }
    }
}

function addFamily() {
    let menu = `--------Thêm nhà-------`
    console.log(menu)
    let id = +input.question("Nhap id:\n")
    let address = input.question('Nhap dia chi nha:\n')
    let family: Family = new Family(id, address);
    street.add(family)
}

function showFamilies() {
    let listFamily = street.findAll();
    for (let i = 0; i < listFamily.length; i++) {
        console.log(`${i + 1} : id - ${listFamily[i].id} , địa chỉ - ${listFamily[i].address}`)
    }
    console.log('0.Thoát');
    let choice = +input.question("Nhap lua chon cua ban: ");
    if (choice == 0) {
        start();
    } else {
        let family: Family = street.findByIndex(choice - 1);
        menuFamily(family);
    }

}

function menuFamily(family: Family) {
    let menu = `---------Menu nhà---------\n1.Thêm thành viên\n2.Hiển thị thành viên\n0.Quay lại`
    let choice
    while (choice != 0) {
        console.log(menu)
        choice = +input.question("Nhap lua chon: ")
        switch (choice) {
            case 1:
                addPerson(family)
                break;
            case 2:
                showPersons(family);
                break;
            case 0:
                break;
        }
    }

}

function showPersons(family: Family) {
    for (let i = 0; i < family.listPerson.length; i++) {
        console.log(`${i + 1} -id: ${family.listPerson[i].id} -ten: ${family.listPerson[i].name}`)
    }

}

function addPerson(family: Family) {
    let id: number = +input.question("Nhap id: ")
    let name: string = input.question("Nhap ten: ")
    let age: number = +input.question("Nhap tuoi: ")
    let job: string = input.question("Nhap nghe nghiep: ")
    let person = new Person(id, name, age, job);
    family.add(person);
}

function main() {
    start();
}

main();