import { Component, OnInit } from '@angular/core';
import { AuthentificationServicesService } from '../services/authentification-services.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Route, Router, RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Users } from '../Interface/users';
import { EtudiantServiceService } from '../services/etudiant-service.service';
import { Etudiant } from '../Interface/etudiant';
import { EnseignantServiceService } from '../services/enseignant-service.service';
import { Enseignant } from '../Interface/enseignant';

@Component({
  selector: 'authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit{
  
  email:string;
  password:string;
  etudiantService:EtudiantServiceService;
  etudiant:Etudiant;
  enseignantService:EnseignantServiceService;
  enseignant:Enseignant;
  id:number;
  user:Users;
  constructor( private route:Router,private authentificationSerivice:AuthentificationServicesService){}
  ngOnInit(): void {
      
  }
  public async onAuthentifierUser(addForm: NgForm):Promise<void> {
    let response = await this.authentificationSerivice.getUsersTypeByEmailAndPassword(this.email,this.password).toPromise();
    this.getUser();
    if(response.message === "Etudiant"){
      this.route.navigate(['/Etudiant']);
          addForm.onReset();
        }else if(response.message === "Enseignant"){
          this.route.navigate(['/Enseignant']);
          addForm.onReset();
        }else if(response.message === "Surveillant"){
          this.route.navigate(['/Surveillant']);
          addForm.onReset();
        }else if(response.message === "Administrateur"){
          this.route.navigate(['/Administrateur']);
          addForm.onReset();
        }else if(response.message === "Censeur"){
          this.route.navigate(['/Censeur']);
          addForm.onReset();
        }else if(response.message === "Proviseur"){
          this.route.navigate(['/Proviseur']);
          addForm.onReset();
        }else if(response.message === "Secretaire"){
          this.route.navigate(['/Secretaire']);
          addForm.onReset();
        }else if(response.message === "null"){
          alert("Email ou Mot de passe est incorrect desole...");
          addForm.onReset();
        }else{
          (error:HttpErrorResponse) =>{
            this.route.navigate(['/page-not-found']);
            alert(error.message);
          }
        }
        addForm.onReset();
  }
  public getUser():void{
    this.authentificationSerivice.getUsersByEmail(this.email).subscribe(
      (reponses:Users) =>{
        this.user = reponses;
        this.id = Number(reponses.id);
        localStorage.setItem('id',JSON.stringify(reponses.id));
        localStorage.setItem('email',JSON.stringify(this.email));
        if(reponses.type === "Etudiant"){
          this.etudiantService.getEtudiantById(reponses.id).subscribe(
            (rep:Etudiant)=>{
              this.etudiant = rep;
            },
            (error:HttpErrorResponse) =>{
              alert(error.message);
            }
          );
        }else if(reponses.type === "Enseignant"){
            this.enseignantService.getEnseignantById(reponses.id).subscribe(
              (reponseUni:Enseignant) =>{
                this.enseignant = reponseUni;
              },
              (error:HttpErrorResponse) =>{
                alert(error.message);
              }
            );
        }
        this.id = Number(localStorage.getItem('id'));
        this.email =  String(localStorage.getItem('email'));
      }
    );
  }
}
