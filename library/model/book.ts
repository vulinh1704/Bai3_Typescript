import {Document} from "./document";

export class Book extends Document{
    private _page: number;
    private _author: string;


    constructor( producer: string, quantity: number, page: number, author: string) {
        super(producer, quantity);
        this._page = page;
        this._author = author;
    }

    get page(): number {
        return this._page;
    }

    set page(value: number) {
        this._page = value;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }
}