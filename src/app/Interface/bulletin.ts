import { Classe } from "./classe";
import { Note } from "./note";

export interface Bulletin {
    id:number;
    etudiant:number;
    classe:Classe;
    listeNote:Note;
    moyenneGenerale:number;
    rangParClasse:number;
}
