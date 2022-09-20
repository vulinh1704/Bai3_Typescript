import {Manage} from "./Manage";
import {OrderDetail} from "../model/orderDetail";

export class OrderDetailManager implements Manage<OrderDetail> {
    listOrderDetail: OrderDetail[] = [];

    add(t: OrderDetail): void {
        this.listOrderDetail.push(t)
    }

    findAll() {
        for (let i = 0; i < this.listOrderDetail.length; i++) {
            console.log(`${this.listOrderDetail[i].customer.name} , ${this.listOrderDetail[i].showCart()}, thoi gian: ${this.listOrderDetail[i].time} `)
        }
    }

    findByID(id: number) {
        this.listOrderDetail.forEach((item, index) => {
            if (item.id == id) {
                return index;
            }
        })
        return -1;
    }

    remove(id: number) {
        let index = this.findByID(id);
        this.listOrderDetail.splice(index, 1);
    }

    update(id: number, t: OrderDetail) {
        let index = this.findByID(id);
        this.listOrderDetail[index] = t;
    }
}