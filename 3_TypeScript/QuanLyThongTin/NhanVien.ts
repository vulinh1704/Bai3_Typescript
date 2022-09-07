// lớp nhân viên
export class Staff {
    // Các thuộc tính của nhân viên
    private _id: number;
    private _name: string;
    private _sex: string;
    private _dateOfBirth: string;
    private _email: string;
    private _phone: number;

    //Hàm khởi tạo nhân viên với các tham số truyền vào là các thuộc tính trên
    constructor(id: number, name: string, sex: string, dateOfBirth: string, email: string, phone: number) {
        this._id = id;
        this._name = name;
        this._sex = sex;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._phone = phone;
    }

    // Xem thông tin
    get name(): string {
        return this._name;
    }

    //Sửa thông tin
    set name(value: string) {
        this._name = value;
    }

    get sex(): string {
        return this._sex;
    }

    set sex(value: string) {
        this._sex = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): number {
        return this._phone;
    }

    set phone(value: number) {
        this._phone = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}