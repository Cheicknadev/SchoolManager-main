import { Users } from "./users";

export interface Convocation {
    id:number;
    objet:string;
    message:string;
    user:Users;
}
