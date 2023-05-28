import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/Interface/etudiant';
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Toast } from 'ngx-toastr';
import { Note } from 'src/app/Interface/note';

@Component({
  selector: 'liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css']
})
export class ListeEtudiantsComponent implements OnInit{
  public etudiants :Etudiant[] = [];
  constructor(private etudiantService:EtudiantServiceService,private toastr:Toast){}
  ngOnInit(): void {
  }
  public getAllEtuidantByClasseLibelle(libelle:string):void{
    this.etudiantService.getAllEtudiantByLibelleClasse(libelle).subscribe(
      (reponse:Etudiant[]) =>{
        this.etudiants = reponse;
      },
      (error:HttpErrorResponse)=>{
        this.toastr.message
      }
    );
  }
  public updateEtudiant(etudiant:Etudiant):void{
    this.etudiantService.updateEtudiant(etudiant).subscribe(
      (reponse:Etudiant)=>{

      },
      (error:HttpErrorResponse) =>{
        this.toastr.message
      }
    );
  }
  public ajourterNoteEtudiant(notes:Note):void{

  }
}
