import { Users } from "./users";

export interface Etudiant extends Users {
    promotion:string;
    extraitImage:string;
    numeroEtudiant:string;
    email:string;
}
