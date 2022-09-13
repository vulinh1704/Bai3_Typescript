class Animal {
    protected _name: string;
    protected _color: string;
    protected _age: number;
    readonly _name2 ?: number;

    constructor(name: string, color: string, age: number) {
        this._name = name;
        this._color = color;
        this._age = age;
    }

    go(): void{
        console.log("animal go!")
    }

    get name2(): number {
        return this._name2;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}

class Elephant extends Animal {
    protected legs: number;

    constructor(name: string, color: string, age: number, legs: number) {
        super(name, color, age);
        this.legs = legs;
    }

    go(): number{
        console.log("Element go");
        return 1;
    }

    eat(){

    }
}
let e: Animal = new Elephant("Khai", "Den", 23,4);
e.go();

