export interface IArrayList<T> {
    add(data: T);

    get(index: number): T;

    size(): number;

    remove(): void
}