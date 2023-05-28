import { Activite } from "./activite";
import { Cours } from "./cours";

export interface Journee {
    id:number;
    date:Date;
    cours:Cours;
    activite:Activite;
}
