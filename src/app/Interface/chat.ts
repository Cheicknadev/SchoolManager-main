import { Users } from "./users";

export interface Chat {
    id:number;
    nomExpediteur:string;
    nomDestinateur:string;
    objet:string;
    message:string;
    liste:Users;
}
