import {Street} from "../Street";
import {HouseHold} from "../HouseHold";
import {Person} from "../Person";

let readlineSync = require('readline-sync');
let street = new Street(1, "A");
function menuStart() {
    let menu = `1.Thêm nhà\n2.Hiển thị các nhà\n3.Hiển thị nhà > 5 người\n0.Thoát`
    let choice = 0;
    do {
        console.log(menu);
        choice = +readlineSync.question("Nhap lua chon: ")
        switch (choice) {
            case 1:
                let house = addHouse();
                street.add(house);
                break;
            case 2:
                showHouses(street);
                break;
            case 3:
                street.findHouseThan5();
                break;
        }
    } while (choice != 0);
}

function addHouse() {
    let id = readlineSync.question("Nhap id: ")
    let name = readlineSync.question("Nhap ten: ")
    return new HouseHold(id, name);
}

function showHouses(street) {
    let listHouseHold = street.showAll();
    for (let i = 0; i < listHouseHold.length; i++) {
        console.log(`${i + 1}. ${listHouseHold[i].id}, ${listHouseHold[i].address}`)
    }
    console.log('0.Out')
    let choice = 0;
    do {
        choice = +readlineSync.question("Chon nha: ")
        if(choice == 0){
            menuStart();
            break;
        }
        showMenuHouse(street, choice);

    } while (choice != 0);
}

function showMenuHouse(street,index) {
    let house = street.findHouseByIndex(index - 1)
    let menu = `Menu nhà ${index}\n1.Thêm người\n2.Hiển thị\n0.Thoát`
    let choice = 0;
    do {
        console.log(menu);
        choice = +readlineSync.question("Nhap lua chon: ")
        switch (choice) {
            case 1:
                house.add(addPerson());
                break;
            case 2:
                console.log(house.showAll())
                break;
            case 0:
                showHouses(street);
        }
    } while (choice != 0);
}

function addPerson() {
    let id = readlineSync.question("Nhap id: ")
    let name = readlineSync.question("Nhap ten: ")
    let age = readlineSync.question("Nhap tuoi: ")
    let occupation = readlineSync.question("Nhap nghe nghiep: ")
    return new Person(id, name, age, occupation);
}

function main() {
    menuStart();
}

main();