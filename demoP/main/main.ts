import {Product} from "../model/product";
import {ProductManager} from "../service/ProductManager";
import {CustomerManager} from "../service/CustomerManager";
import {Customer} from "../model/customer";
import {OrderDetailManager} from "../service/OrderDetailManager";
import {OrderDetail} from "../model/orderDetail";

let listProduct: ProductManager = new ProductManager();
let listCustomer: CustomerManager = new CustomerManager();
let orderManage: OrderDetailManager = new OrderDetailManager();
let input = require('readline-sync');

function mainMenu() {
    let menu = `-----Menu chinh-----\n1.Them, sua, xoa san pham\n2.Them khach hang\n3.Mua san pham\n4.Hien thi hoa don`
    let choice;

    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                showMenuProduct();
                break;
            case 2:
                addCustomer();
                break;
            case 3:
                buyProduct();
                break;
            case 4:
                showOrder();
                break;
        }
    } while (choice != 0)


}

function addCustomer() {
    let id = +input.question('Nhap id khach hang: ');
    let name = input.question('Nhap ten khach hang: ');

    listCustomer.add(new Customer(id, name))

}

function showMenuProduct() {
    let menu = `----Menu Product\n1.Them\n2.Xoa\n3.Sua\n4.Hien thi\n0.Thoat`
    let choice
    do {
        console.log(menu)
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:


            case 4:
                showListProduct();
                break;
        }
    } while (choice != 0)
}

function addProduct() {
    let id = +input.question('Nhap id san pham: ');
    let name = input.question('Nhap ten san pham: ');
    let quantity = +input.question('Nhap so luong san pham: ');

    let product = new Product(id, name, quantity);

    listProduct.add(product);
}

function showListProduct() {
    console.log(listProduct.findAll());
}

function buyProduct() {
    let id = +input.question("Nhap id khach hang: ");
    for (let i = 0; i < listProduct.listProduct.length; i++) {
        console.log(`id: ${listProduct.listProduct[i].id}, ten: ${listProduct.listProduct[i].name}, soluong: ${listProduct.listProduct[i].quantity}`);
    }
    let idOrder = +input.question("Nhap id hoa don: ");
    let idProduct = +input.question("Nhap id san pham: ");

    let product = listProduct.findProductById(idProduct);
    let amount = +input.question("Nhap so luong can mua: ");

    listProduct.update(idProduct,new Product(product.id,product.name,product.quantity - amount));

    let customer = listCustomer.findCustomerById(id);
    let time = new Date();
    let today = `${time.getDate()}/${time.getMonth() + 1}`;

    product.quantity = amount;
    let orderDetail = new OrderDetail(idOrder, customer, today);
    orderDetail.add(product);
    orderManage.add(orderDetail);
}

function showOrder() {
    orderManage.findAll();
}

mainMenu();