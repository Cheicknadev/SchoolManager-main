import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrComponentlessModule } from 'ngx-toastr';
import { Absence } from 'src/app/Interface/absence';
import { Classe } from 'src/app/Interface/classe';
import { Enseignant } from 'src/app/Interface/enseignant';
import { Etudiant } from 'src/app/Interface/etudiant';
import { Note } from 'src/app/Interface/note';
import { AbsenceServiceService } from 'src/app/services/absence-service.service';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { EmploieDuTempsServiceService } from 'src/app/services/emploie-du-temps-service.service';
import { EnseignantServiceService } from 'src/app/services/enseignant-service.service';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
import { NotesServicesService } from 'src/app/services/notes-services.service';

@Component({
  selector: 'enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit{
  montrerChamp: boolean = false;
  montrerChampNotes: boolean = false;
  public valeur: string = "";
  public  valeurNote: string = "";
  public etudiants : Etudiant []=[];
  public absences : Absence[] = [];
  public classes :Classe[]= [];
  public idEtudiant:number;
  enseignant:Enseignant;
constructor(private enseignantService:EnseignantServiceService,private absenceService:AbsenceServiceService,private  classeServices:ClasseServiceService,private etudiantService:EtudiantServiceService,private notesService:NotesServicesService,private emploiDuTempsService:EmploieDuTempsServiceService,private router:Router){}

ngOnInit(): void {
  this.getAllClasses();
  this.getAllListeAbscenceEnseignant();
}
@ViewChild('DisplayEmploi', { static: true }) DisplayEmploi!: TemplateRef<any>;

  // ...
  DisplayShare: boolean = false;
  // ...
  DisplayExport: boolean = false;
  //...
  DisplayProfil: boolean = false;
  //...
  DisplayConvocation: boolean = false;
  //...
  DisplayAbsence: boolean = false;
  //...
  DisplayReclation: boolean = false;
  //...
  DisplaySupport: boolean = false;
  //...
  DisplayGererControl:boolean = false;
  //...
  DisplayEmploiDuTemps:boolean = false;
  //...
  DisplayChat:boolean = false;
  //...
  DisplayListe:boolean = false;

  public afficherChamp():void {
    if(this.montrerChampNotes === false){
      this.montrerChamp = !this.montrerChamp;
    }else{
      this.montrerChampNotes = false
      this.montrerChamp = !this.montrerChamp;
    }

  }
  public afficherChampNotes():void {
    if(this.montrerChamp === false){
      this.montrerChampNotes = !this.montrerChampNotes;
    }else{
      this.montrerChamp = false
      this.montrerChampNotes = !this.montrerChampNotes;
    }
  }
  DisplayOrHiddenShare(): void {
    this.DisplayShare = !this.DisplayShare;
    this.DisplayExport = false;
    this.DisplayConvocation = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenExport():void{
    this.DisplayExport = !this.DisplayExport;
    this.DisplayShare = false;
    this.DisplayConvocation = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenEmploiDuTemps():void{
    this.DisplayEmploiDuTemps = !this.DisplayEmploiDuTemps;
    this.DisplayShare = false;
    this.DisplayExport = false;
    this.DisplayConvocation = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenConvocation():void{
    this.DisplayConvocation = !this.DisplayConvocation;
    this.DisplayShare = false;
    this.DisplayExport = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;
    this.DisplayEmploiDuTemps = false;
  }
  DisplayOrHiddenAbsence():void{
    this.DisplayAbsence = !this.DisplayAbsence
    this.DisplayShare = false;
    this.DisplayExport = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayConvocation = false;
    this.DisplayProfil = false;
    this.DisplayEmploiDuTemps = false;
  }
  DisplayOrHiddenGererControl():void{
    this.DisplayGererControl = !this.DisplayGererControl
    this.DisplayShare = false;
    this.DisplayExport = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayConvocation = false;
    this.DisplayProfil = false;
    this.DisplayAbsence = false;
  }
  DisplayOrHiddenReclation():void{
    this.DisplayReclation = !this.DisplayReclation
    this.DisplayShare = false;
    this.DisplayExport = false;
    this.DisplaySupport = false;
    this.DisplayAbsence = false;
    this.DisplayConvocation = false;
    this.DisplayProfil = false;
    this.DisplayAbsence = false;
  }
  DisplayOrHiddenEmploi():void{

    this.DisplayReclation = false;
    this.DisplayShare = false;
    this.DisplayExport = false;
    this.DisplaySupport = false;
    this.DisplayAbsence = false;
    this.DisplayConvocation = false;
    this.DisplayProfil = false;
    this.DisplayAbsence = false;
  }
  DisplayOrHiddenSupport():void{
    this.DisplaySupport = !this.DisplaySupport
    this.DisplayShare = false;
    this.DisplayExport = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplayConvocation = false;
    this.DisplayProfil = false;
    this.DisplayAbsence = false;
    this.DisplayChat = false;
  }
  DisplayOrHiddenChat():void{
    this.DisplayChat = !this.DisplayChat;
    this.DisplaySupport = false;
    this.DisplayShare = false;
    this.DisplayExport = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplayConvocation = false;
    this.DisplayProfil = false;
    this.DisplayAbsence = false;
  }
  DisplayOrHiddenProfil():void{
    this.DisplayProfil = !this.DisplayProfil
    this.DisplaySupport = false;
    this.DisplayShare = false;
    this.DisplayExport = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplayConvocation = false;
    this.DisplayListe = false;
  }
  DisplayOrHiddenListe():void{
    this.DisplayListe = !this.DisplayListe
    this.afficherChamp();
    this.DisplaySupport = false;
    this.DisplayShare = false;
    this.DisplayExport = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplayConvocation = false;
    this.DisplayProfil = false;
  }
  public getAllClasses():void{
    this.classeServices.getAllClasse().subscribe(
      (reponse:Classe[]) =>{
        this.classes = reponse;
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
  public visualisationAbscence():void{
    let id = localStorage.getItem("Id");
    this.enseignantService.getEnseignantById(Number(id)).subscribe(
      (reponse:Enseignant) =>{
        this.absenceService.getEnseignantAbsences(reponse).subscribe(
          (reponses:Absence[]) =>{
           this.absences = reponses;
          }
        );
      }
    );
  }
  public listeDeClasseByLibelle(libelle:string):void{
    this.enseignantService.getAllListeEtudiantByClasse(libelle).subscribe(
      (reponse:Etudiant[]) =>{
        this.etudiants = reponse;
      }
    );
  }
  public getEmploiDuTempsByEnseignant():void{
   let id = localStorage.getItem("Id");
    this.enseignantService.getEnseignantById(Number(id)).forEach(
      (reponseEnseignant:Enseignant)=>{

      }
    );
  }
  public getAllListeEtudiantByLibelleClasse(libelle:string):void{
    this.classeServices.getAllEtudiantByLibelleClasse(libelle).subscribe(
      (reponse:Etudiant[]) =>{
        this.etudiants = reponse;
      },
      (error:HttpErrorResponse) =>{
          alert(error.message);
      }

    );
  }
  public getPageProfile():void{
    this.router.navigate(['/Profile']);
  }
  public searchClasse(valeur: string): void {
    const results: Classe[] = [];
      for(let classe of this.classes){
      if (classe.libelle.toLowerCase().indexOf(valeur.toLowerCase()) !== -1
      || classe.description.toLowerCase().indexOf(valeur.toLowerCase()) !== -1
      || classe.abrege.toLowerCase().indexOf(valeur.toLowerCase()) !== -1) {
        results.push(classe);
      }
      console.log("Taille :" +results.length);
      this.classes = results;
      }
      if (results.length === 0 || !valeur) {
        this.getAllClasses();

      }
    }
    public getAllListeAbscenceEnseignant():void{
      let id = localStorage.getItem("id");
      console.log("Id :"+ id);
      this.enseignantService.getEnseignantById(Number(id)).subscribe(
        (reponse:Enseignant) =>{
          this.enseignant = reponse;
          this.absenceService.getEnseignantAbsences(reponse).subscribe(
            (reponseAbsence:Absence[]) =>{
              this.absences = reponseAbsence;
            },
            (error:HttpErrorResponse) =>{
              alert(error.message);
            }
          );
        }
      );
    }
  public saveNotes(notes:Note):void{
    this.etudiantService.getEtudiantById(this.idEtudiant).subscribe(
      );
  }
  public getListeEtudiantByClasse(abrege:string):void{
    this.classeServices.getAllEtudiantClassebyAbrege(abrege).subscribe(

    );
  }
}

