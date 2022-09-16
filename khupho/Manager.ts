export interface Manager<T> {
    add(t: T);
    showAll();
    findById(id: number);
}