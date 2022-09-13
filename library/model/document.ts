export class Document {
    private _id:number;
    private _producer: string;
    private _quantity: number;
    static temp = 0;

    constructor(producer: string, quantity: number) {
        Document.temp++;
        this._id = Document.temp;
        this._producer = producer;
        this._quantity = quantity;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get producer(): string {
        return this._producer;
    }

    set producer(value: string) {
        this._producer = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }
}