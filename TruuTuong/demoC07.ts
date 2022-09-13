class Person{

}
class Car{

}
interface Manager<T>{
    add(t: T);
}
class PersonManager implements Manager<Person>{
    add(t: Person) {
    }
}

class CarManager implements Manager<Car>{
    add(t: Car) {
    }
}

