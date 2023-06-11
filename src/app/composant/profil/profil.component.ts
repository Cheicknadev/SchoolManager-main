import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administration } from 'src/app/Interface/administration';
import { Enseignant } from 'src/app/Interface/enseignant';
import { Etudiant } from 'src/app/Interface/etudiant';
import { Users } from 'src/app/Interface/users';
import { AdministrateurServiceService } from 'src/app/services/administrateur-service.service';
import { AuthentificationServicesService } from 'src/app/services/authentification-services.service';
import { EnseignantServiceService } from 'src/app/services/enseignant-service.service';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  displayEtudiant:boolean = false;
  displayEnseignant:boolean = false;
  displayAdministration:boolean = false;
  etudiant:Etudiant;
  enseignant:Enseignant;
  administration:Administration;
  ngOnInit(): void {
      this.getUsersById();
  }
  constructor(private etudiantService:EtudiantServiceService,private enseignantService:EnseignantServiceService,
    private administrationService:AdministrateurServiceService,private authentificationService:AuthentificationServicesService,private router:Router){}
  public DiplayEtudiantHiddenOrPlayer():void{
    this.displayEtudiant = !this.displayEtudiant;
    this.displayAdministration = false;
    this.displayEnseignant = false;
  }
  public getUsersById():void{
    let id = localStorage.getItem("id");
    this.authentificationService.getUsersById(Number(id)).subscribe(
      (reponse:Users) =>{
        if(reponse.type === "Etudiant"){
          this.etudiantService.getEtudiantById(reponse.id).subscribe(
            (reponseEtudiant:Etudiant)=>{
              this.etudiant = reponseEtudiant;
            }
          );
        }else if(reponse.type === "Enseignant"){
          this.enseignantService.getEnseignantById(reponse.id).subscribe(
            (reponseEnseignant:Enseignant)=>{
              this.enseignant = reponseEnseignant;
              console.log("Reponse enseignant : " + reponseEnseignant.nom);
              console.log("Attribut enseignant : " + this.enseignant.nom)
            }
          );
        }else if(reponse.type === "Censeur"){
          this.administrationService.deleteAdministrationById(reponse.id).subscribe(

            
          );
        }else{
          this.router.navigate(['/'])
        }
      }
    );
  }
}
