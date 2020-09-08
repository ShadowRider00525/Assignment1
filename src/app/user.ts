export class User{
    username:string;
    email:string;
    pass:string;
    position:string;
    valid:boolean;
    constructor(username:string='',email:string='',pass:string='', position:string='',valid=false){
        this.username = username;
        this.email = email;
        this.pass = pass;
        this.position = position;
        this.valid = valid;
    }
}