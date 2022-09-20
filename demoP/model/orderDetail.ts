import {Customer} from "./customer";
import {Product} from "./product";

export class OrderDetail {
    private _id: number
    private _customer: Customer
    private _time: string
    public cart: Product [] = [];

    constructor(id: number, customer: Customer, time: string) {
        this._id = id;
        this._customer = customer;
        this._time = time;
    }

    add(product: Product) {
        this.cart.push(product);
    };

    showAll() {
        return this.cart;
    };

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get customer(): Customer {
        return this._customer;
    }

    set customer(value: Customer) {
        this._customer = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }

    showCart() {
        let str = ``;
        this.cart.forEach((item) => {
            str += `${item.name} , sl : ${item.quantity}`
        })
        return str;
    }
}