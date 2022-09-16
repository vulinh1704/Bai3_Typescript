import {Manager} from "./Manager";
import {HouseHold} from "./HouseHold";

export class Street implements Manager<HouseHold> {
    id: number;
    name: string;
    listHouseHold: HouseHold[] = [];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    add(t: HouseHold) {
        this.listHouseHold.push(t);
    }

    findById(id: number) {
        for (let i = 0; i < this.listHouseHold.length; i++) {
            if (id == this.listHouseHold[i].id) {
                return i;
            }
        }
        return -1;
    }

    showAll() {
        return this.listHouseHold;
    }

    findHouseByIndex(index) {
        return this.listHouseHold[index];
    }

    findHouseThan5() {
        let house: HouseHold[] = [];
        for (let i = 0; i < this.listHouseHold.length; i++) {
            if (this.listHouseHold[i].member > 2) {
                house.push(this.listHouseHold[i]);
            }
        }
        console.log(1)
        for (let i = 0; i < house.length; i++) {
            console.log(house);
        }
    }

    findHouseNinh() {
        for (let i = 0; i < this.listHouseHold.length; i++) {
            if (this.name == "A") {
                console.log(this.listHouseHold[i].findNinh());
            }
        }
    }
}