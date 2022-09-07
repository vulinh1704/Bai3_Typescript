import {Staff} from "./staff";
import {EmployeeManager} from "./employeeManager";
import {Role} from "./role";

function main(){
    //Tạo các nhân viên
    let staff: Staff = new Staff(1,"Văn Đức","20/10/2002","Vinh",Role.CEO);
    let staff2: Staff = new Staff(4,"Anh Việt","19/09/2002","Hội An",Role.Sale);
    let staff3: Staff = new Staff(3,"Minh Anh","19/02/2002","Gia Lâm",Role.Sale);

    EmployeeManager.add(staff);
    EmployeeManager.add(staff2);
    EmployeeManager.add(staff3);
    console.log(EmployeeManager.show());
    // EmployeeManager.deleteByFilter(4);
    // console.log("Sau xóa");
    // console.log(EmployeeManager.show());
    EmployeeManager.edit(3,"Minh Em");
    console.log(EmployeeManager.show());

}
main();