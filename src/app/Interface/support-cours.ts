import { ClasseServiceService } from "../services/classe-service.service";

export interface SupportCours {
    id:number;
    nomCours:string;
    dateDepot:Date;
    classe:ClasseServiceService;
    ficheDuCours:string;
}
