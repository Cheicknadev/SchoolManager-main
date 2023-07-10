import { Users } from "./users";

export interface Etudiant extends Users {
    id:number;
    nom:string;
    prenom:string;
    addresse:string;
    type:string;
    telephone:string;
    matricule:string;
    email:string;
    password:string;
    dateNaissance:Date;
    image:string;
    promotion:string;
    extraitImage:string;
    numeroEtudiant:string;
    classe : any;
}
