export class Node<T> {
    private _data: T;
    private _next: Node<T> | null = null;

    constructor(data: T) {
        this._data = data;
    }

    get data(): T {
        return this._data;
    }

    set data(value: T) {
        this._data = value;
    }

    get next(): Node<T> | null {
        return this._next;
    }

    set next(value: Node<T> | null) {
        this._next = value;
    }
}
