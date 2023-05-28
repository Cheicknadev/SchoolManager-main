import { Users } from "./users";

export interface Facture {
    numero:number;
    date:Date;
    matiere:string;
    type:Users;
    tauxHoraire:number;
    nbHeures:number;
    montantTotal:number;
}
