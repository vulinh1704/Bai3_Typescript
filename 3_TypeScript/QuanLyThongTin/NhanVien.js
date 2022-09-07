"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
// lớp nhân viên
var Staff = /** @class */ (function () {
    //Hàm khởi tạo nhân viên với các tham số truyền vào là các thuộc tính trên
    function Staff(id, name, sex, dateOfBirth, email, phone) {
        this._id = id;
        this._name = name;
        this._sex = sex;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._phone = phone;
    }
    Object.defineProperty(Staff.prototype, "name", {
        // Xem thông tin
        get: function () {
            return this._name;
        },
        //Sửa thông tin
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        set: function (value) {
            this._sex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "dateOfBirth", {
        get: function () {
            return this._dateOfBirth;
        },
        set: function (value) {
            this._dateOfBirth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return Staff;
}());
exports.Staff = Staff;
