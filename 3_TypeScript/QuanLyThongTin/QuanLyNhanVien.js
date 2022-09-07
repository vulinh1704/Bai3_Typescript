"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffManager = void 0;
// lớp quản lý nhân viên
var StaffManager = /** @class */ (function () {
    function StaffManager() {
        // thuộc tính là 1 mảng các nhân viên
        this._staff = [];
    }
    Object.defineProperty(StaffManager.prototype, "staff", {
        get: function () {
            return this._staff;
        },
        set: function (value) {
            this._staff = value;
        },
        enumerable: false,
        configurable: true
    });
    //Hàm thêm nhân viên
    StaffManager.prototype.addStaff = function (staff) {
        this._staff.push(staff);
    };
    //Hàm xóa nhân viên chúng ta sẽ xóa bằng thông qua id truyền vô nhé !
    StaffManager.prototype.delete = function (id) {
        //Xóa từ vị trí id đi 1 phần tử
        this._staff.splice(id, 1);
    };
    //Hiển thị nhân viên
    StaffManager.prototype.show = function () {
        for (var i = 0; i < this._staff.length; i++) {
            console.log(this._staff[i]);
        }
    };
    return StaffManager;
}());
exports.StaffManager = StaffManager;
