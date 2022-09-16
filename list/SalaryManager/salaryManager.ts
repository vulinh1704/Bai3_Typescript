import {Node} from "../Node/Node";
import {Salary} from "./salary";

export class SalaryManager<T> {
    head: Node<Salary> | null;
    tail: Node<Salary> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertNode(data: Salary) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    showNodes() {
        let current: Node<Salary> | null = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    sumSalary(){
        let sum: number = 0;
        let current: Node<Salary> | null = this.head;
        while (current != null) {
            sum += current.data.money;
            current = current.next;
        }
        return sum;
    }

}