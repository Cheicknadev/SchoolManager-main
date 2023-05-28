import { Activite } from "./activite";
import { Classe } from "./classe";
import { Cours } from "./cours";
import { Enseignant } from "./enseignant";
import { Journee } from "./journee";

export interface EmploieDuTemps {
    id:number;
    cours:Cours;
    journee:Journee;
    activite:Activite;
    enseignantDispo:Enseignant;
    salleDeclasseDispo:Classe;
}
