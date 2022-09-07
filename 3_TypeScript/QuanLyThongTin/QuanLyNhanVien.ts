import {Staff} from "./NhanVien";

// lớp quản lý nhân viên
export class StaffManager {
    // thuộc tính là 1 mảng các nhân viên
    private _staff: Staff[] = [];

    constructor() {
    }

    get staff(): Staff[] {
        return this._staff;
    }

    set staff(value: Staff[]) {
        this._staff = value;
    }

    //Hàm thêm nhân viên
    addStaff(staff: Staff): void {
        this._staff.push(staff);
    }

    //Hàm xóa nhân viên chúng ta sẽ xóa bằng thông qua id truyền vô nhé !
    delete(id: number): void {
        //Xóa từ vị trí id đi 1 phần tử
        this._staff.splice(id, 1);
    }

    //Hiển thị nhân viên
    show(): void{
        for (let i = 0; i < this._staff.length; i++) {
            console.log(this._staff[i]);
        }
    }
}

