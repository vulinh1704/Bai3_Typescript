enum Role{
    user = 1,
    admin
}
class User {
    private _name: string;
    private _email: string;
    private _role: number;

    constructor(name: string, email: string, role: Role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    // Trả về đối tượng hiện tại
    getInfo(){
        return this;
    }

    // Kiểm tra có phải admin hay không
    isAdmin(role: number){
        if(role == 1){
            console.log("Admin");
        } else {
            console.log("User");
        }
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): Role {
        return this._role;
    }

    set role(value: Role) {
        this._role = value;
    }
}