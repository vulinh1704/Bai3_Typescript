"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NhanVien_1 = require("./NhanVien");
var QuanLyNhanVien_1 = require("./QuanLyNhanVien");
function main() {
    //Khởi tạo các đối tương nhân viên
    var staff = new NhanVien_1.Staff(1, "Linh", "Nam", "17/04", "truonglinh@gmail", 9220);
    var staff2 = new NhanVien_1.Staff(2, "Thuận", "Nam", "19/04", "truongthuan@gmail", 6220);
    var staff3 = new NhanVien_1.Staff(3, "Hoa", "Nữ", "20/04", "hoa@gmail", 7220);
    //Khởi tạo đối tượng quản lý nhân viên
    var staffManager = new QuanLyNhanVien_1.StaffManager();
    //Giờ chúng ta sẽ sử dụng các hàm quản lý
    //Thêm nhân viên
    staffManager.addStaff(staff);
    staffManager.addStaff(staff2);
    staffManager.addStaff(staff3);
    //Hiển thị nhân viên
    staffManager.show();
    //Xóa nhân viên theo id
    staffManager.delete(3);
    console.log("____Sau xóa____");
    staffManager.show();
}
main();
