class QuadraticEquation {
    a = 0;
    b = 0;
    c = 0;

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getter() {
        return [this.a, this.b, this.c];
    }

    getDiscriminant() {
        return this.b * this.b - 4 * this.a * this.c;
    }

    getRoot1() {
        return (-this.b + (Math.pow(-this.b + this.getDiscriminant(), 0.5))) / (2 * this.a);
    }

    getRoot2() {
        return (-this.b - (Math.pow(-this.b + this.getDiscriminant(), 0.5))) / (2 * this.a);
    }
}

let q = new QuadraticEquation(1, 5, 3);
if (q.getDiscriminant() > 0) {
    console.log("r1: " + q.getRoot1());
    console.log("r2: " + q.getRoot2());
} else if (q.getDiscriminant() === 0) {
    console.log("r: " + q.getRoot1());
} else {
    console.log("The equation has no roots");
}