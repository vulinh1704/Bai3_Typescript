import {Manage} from "./Manage";
import {Product} from "../model/product";

export class ProductManager implements Manage<Product> {
    listProduct: Product[] = [];

    add(t: Product): void {
        this.listProduct.push(t)
    }

    findAll() {
        return this.listProduct;
    }

    findByID(id: number): number {
        for (let i = 0; i < this.listProduct.length; i++) {
            if(id == this.listProduct[i].id){
                return i;
            }
        }
        return -1;
    }

    remove(id: number): void {
        let index = this.findByID(id);
        this.listProduct.splice(index, 1);
    }

    update(id: number, t: Product): void {
        let index = this.findByID(id);
        this.listProduct[index] = t;
    }

    findProductById(id: number): Product {
        let index = this.findByID(id);
        return this.listProduct[index];
    }

}