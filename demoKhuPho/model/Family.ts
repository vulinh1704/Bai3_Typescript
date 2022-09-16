import {Manager} from "../service/Manager";
import {Person} from "./Person";

export class Family implements Manager<Person>{
    private _id: number;
    private _address: string;
    private _member: number = 0;
    listPerson: Person[] = [];

    constructor(id: number, address: string) {
        this._id = id;
        this._address = address;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get member(): number {
        return this._member;
    }

    set member(value: number) {
        this._member = value;
    }

    add(t: Person) {
        this.listPerson.push(t);
        this._member++;
    }

    edit(id: number, t: Person) {
    }

    findAll() {
       return this.listPerson;
    }

    findById(id: number) {
    }

    findByNameNinh(){
        for (let i = 0; i < this.listPerson.length; i++) {
            if(this.listPerson[i].name == "Ninh"){
                console.log(this);
            }
        }
    }
}