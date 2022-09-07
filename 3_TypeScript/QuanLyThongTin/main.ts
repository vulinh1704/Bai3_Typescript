import {Staff} from "./NhanVien";
import {StaffManager} from "./QuanLyNhanVien";

function main(){
    //Khởi tạo các đối tương nhân viên
    let staff: Staff = new Staff(1,"Linh","Nam","17/04","truonglinh@gmail",9220);
    let staff2: Staff = new Staff(2,"Thuận","Nam","19/04","truongthuan@gmail",6220);
    let staff3: Staff = new Staff(3,"Hoa","Nữ","20/04","hoa@gmail",7220);

    //Khởi tạo đối tượng quản lý nhân viên
    let staffManager: StaffManager = new StaffManager();
    //Giờ chúng ta sẽ sử dụng các hàm quản lý

    //Thêm nhân viên
    staffManager.addStaff(staff);
    staffManager.addStaff(staff2);
    staffManager.addStaff(staff3);

    //Hiển thị nhân viên
    staffManager.show();

    //Xóa nhân viên theo id
    staffManager.delete(3);
    console.log("____Sau xóa____")
    staffManager.show();
}
main();