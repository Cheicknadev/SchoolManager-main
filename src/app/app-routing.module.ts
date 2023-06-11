import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './composant/contact/contact.component';
import { EtudiantComponent } from './composant/etudiant/etudiant.component';
import { EnseignantComponent } from './composant/enseignant/enseignant.component';
import { EmploieDuTempsComponent } from './composant/emploie-du-temps/emploie-du-temps.component';
import { ListeEtudiantsComponent } from './composant/liste-etudiants/liste-etudiants.component';
import { CenseurComponent } from './composant/censeur/censeur.component';
import { SecretaireComponent } from './composant/secretaire/secretaire.component';
import { ProviseurComponent } from './composant/proviseur/proviseur.component';
import { SurveillantComponent } from './composant/surveillant/surveillant.component';
import { FicheInscriptionComponent } from './composant/fiche-inscription/fiche-inscription.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SignUpComponent } from './composant/sign-up/sign-up.component';
import { AproposComponent } from './composant/apropos/apropos.component';
import { ProfilComponent } from './composant/profil/profil.component';
import { ProfileEntiteComponent } from './profile-entite/profile-entite.component';


const routes: Routes = [
  {path:"Contact",component:ContactComponent},
  {path:"Etudiant",component:EtudiantComponent},
  {path:"Enseignant",component:EnseignantComponent},
  {path:"EmploiDuTemps",component:EmploieDuTempsComponent},
  {path:"ListeEtudiant",component:ListeEtudiantsComponent},
  {path:"Censeur",component:CenseurComponent},
  {path:"Secretaire",component:SecretaireComponent},
  {path:"Proviseur",component:ProviseurComponent},
  {path:"Surveillant",component:SurveillantComponent},
  {path:"Contact",component:ContactComponent},
  {path:"Inscription",component:InscriptionComponent},
  {path:"SignUP",component:SignUpComponent},
  {path:"Apropos",component:AproposComponent},
  {path:"Profile",component:ProfilComponent},
  {path:"ProfileEntite",component:ProfileEntiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
