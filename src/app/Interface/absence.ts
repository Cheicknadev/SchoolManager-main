import { Administrateur } from "./administrateur";
import { Cours } from "./cours";
import { Enseignant } from "./enseignant";
import { Etudiant } from "./etudiant";
import { Present } from "./present";

export interface Absence {
    id:number;
    dateAbsence:Date;
    present :Present;
    cours : Cours;
    etudiant:Etudiant;
    enseignant:Enseignant;
    administration:Administrateur;
}
