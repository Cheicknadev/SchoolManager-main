export interface Classe {
    id:number;
    libelle:string;
    description:string;
    abrege:string;
    anneeScolaire:Date;
    enseignantPrincipal:string;
    listeEtudiant:File;
    listeEnseignant:File;
}
