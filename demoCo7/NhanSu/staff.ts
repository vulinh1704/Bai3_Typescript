// Thuộc tính staff : Id ,Tên, ngày sinh , địa chỉ, vị trí công việc
// Phương thức : get / set

//Lớp quản lý nhân sự
//Thuộc tính : Mảng chứa các nhân viên
//Phương thức : Thêm nhân sự , Xem chi tiết từng nhân viên, Xóa nhân viên, Chỉnh sửa thông tin 1 nhân sự
//CRUD : create,read,Update, Delete
import {Role} from "./role";

export class Staff {
    private _id: number;
    private _name: string;
    private _dateOfBirth: string;
    private _address: string;
    private _role: Role

    constructor(id: number, name: string, dateOfBirth: string, address: string, role: Role) {
        this._id = id;
        this._name = name;
        this._dateOfBirth = dateOfBirth;
        this._address = address;
        this._role = role;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get role(): Role {
        return this._role;
    }

    set role(value: Role) {
        this._role = value;
    }
}