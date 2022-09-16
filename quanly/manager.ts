import {Clazz} from "./clazz";
import {Student} from "./student";

export default interface Manager<T> {
    add(t: T);

    findAll();

    findById(id: number);
}