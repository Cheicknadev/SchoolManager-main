import { Cours } from "./cours";
import { Users } from "./users";

export interface Enseignant extends Users{
    matiereEnseigner:Cours;
    diplome:string;
    competence:string;
    experience:string;
    etatCivil:string;
    listeDateDispo:Date;
}
