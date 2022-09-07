import {Staff} from "./staff";

export class EmployeeManager {
    static list: Staff[] = [];

    constructor() {
    }

    static add(staff: Staff) {
        this.list.push(staff);
    }

    static show() {
        return this.list;
    }

    static delete(id: number) {
        let index: number = this.find(id);
        this.list.splice(index, 1);
    }

    static find(id: number): number {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    static deleteByFilter(id: number) {
        this.list = this.list.filter((item) => {
           return item.id !== id;
        });
    }

    static edit(id:number, name:string){
        let index = this.find(id);
        for (let i = 0; i < this.list.length; i++) {
            if(index == i){
                this.list[i].name = name;
            }
        }
    }
}