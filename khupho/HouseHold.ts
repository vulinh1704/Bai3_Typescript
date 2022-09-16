import {Manager} from "./Manager";
import {Person} from "./Person";

export class HouseHold implements Manager<Person>{
    id: number;
    member:number = 0;
    address:string;
    listPerson: Person[] = [];

    constructor(id: number, address: string) {
        this.id = id;
        this.address = address;
    }

    add(t: Person) {
        this.listPerson.push(t);
        this.member++;
    }

    findById(id: number) {
        for (let i = 0; i < this.listPerson.length; i++) {
            if(id == this.listPerson[i].id){
                return i;
            }
        }
        return -1;
    }

    showAll() {
        return this.listPerson;
    }

    findNinh(){
        for (let i = 0; i < this.listPerson.length; i++) {
            if(this.listPerson[i].name == "Ninh"){
                return this;
            }
        }
        return "Khong tim thay"
    }
}