import { Departments } from './departments';

export class Users {
    id:number;
    name:string;
    fatherName:string;
    email:string;
    password:string;
    roles:boolean;
    dateOfJoining:Date;
    Departments: Departments;
    active:boolean;
    activeAccount: boolean;
}
