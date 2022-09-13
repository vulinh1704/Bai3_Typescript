import {Document} from "./document";

export class Magazine extends Document{
    private _issue: number;
    private _month: string;


    constructor( producer: string, quantity: number, issue: number, month: string) {
        super(producer, quantity);
        this._issue = issue;
        this._month = month;
    }

    get issue(): number {
        return this._issue;
    }

    set issue(value: number) {
        this._issue = value;
    }

    get month(): string {
        return this._month;
    }

    set month(value: string) {
        this._month = value;
    }
}