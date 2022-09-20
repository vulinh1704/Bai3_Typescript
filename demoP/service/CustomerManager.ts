import {Manage} from "./Manage";
import {Customer} from "../model/customer";

export class CustomerManager implements Manage<Customer>{
     listCustomer: Customer[] = []

    add(t: Customer): void {
         this.listCustomer.push(t)
    }

    findAll() {
    }

    findByID(id: number): number {
        //  this.listCustomer.forEach((item,index)=>{
        //      if (item.id == id) {
        //          return index;
        //      }
        //  })
        // return -1;
        for (let i = 0; i < this.listCustomer.length; i++) {
            if(this.listCustomer[i].id == id){
                return i;
            }
        }
        return -1;
    }

    remove(id: number): void {
        let index = this.findByID(id);
        this.listCustomer.splice(index,1);
    }

    update(id: number, t: Customer) {

    }
    findCustomerById(id: number):Customer {
         let index = this.findByID(id);
        return this.listCustomer[index];
    }
}