import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './fragment/header/header.component';
import { FooterComponent  } from './fragment/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { EtudiantComponent } from './composant/etudiant/etudiant.component';
import { EnseignantComponent } from './composant/enseignant/enseignant.component';
import { MaterielComponent } from './composant/materiel/materiel.component';
import { AdministrationComponent } from './composant/administration/administration.component';
import { ProfilComponent } from './composant/profil/profil.component';
import { ConvocationComponent } from './composant/convocation/convocation.component';
import { BulletinComponent } from './composant/bulletin/bulletin.component';
import { PayementComponent } from './composant/payement/payement.component';
import { ClasseComponent } from './composant/classe/classe.component';
import { CoursComponent } from './composant/cours/cours.component';
import { EmploieDuTempsComponent } from './composant/emploie-du-temps/emploie-du-temps.component';
import { InterfaceEtudiantComponent } from './composant/interface-etudiant/interface-etudiant.component';
import { InterfaceEnseignantComponent } from './composant/interface-enseignant/interface-enseignant.component';
import { InterfaceEconomeComponent } from './composant/interface-econome/interface-econome.component';
import { InterfaceSurveillantGeneralComponent } from './composant/interface-surveillant-general/interface-surveillant-general.component';
import { InterfaceAdministrateurComponent } from './composant/interface-administrateur/interface-administrateur.component';
import { AdministrateurComponent } from './composant/administrateur/administrateur.component';
import { InterfaceCenseurComponent } from './composant/interface-censeur/interface-censeur.component';
import { InterfaceProviseurComponent } from './composant/interface-proviseur/interface-proviseur.component';
import { InterfaceProfilComponent } from './composant/interface-profil/interface-profil.component';
import { InterfaceMaterielComponent } from './composant/interface-materiel/interface-materiel.component';
import { InterfaceEmploieDuTempsComponent } from './composant/interface-emploie-du-temps/interface-emploie-du-temps.component';
import { InterfaceBulletinComponent } from './composant/interface-bulletin/interface-bulletin.component';
import { ChatComponent } from './composant/chat/chat.component';
import { ContactComponent } from './composant/contact/contact.component';
import { FactureComponent } from './composant/facture/facture.component';
import { FicheInscriptionComponent } from './composant/fiche-inscription/fiche-inscription.component';
import { SignOutComponent } from './composant/sign-out/sign-out.component';
import { PresentationEtablisementScolaireComponent } from './composant/presentation-etablisement-scolaire/presentation-etablisement-scolaire.component';
import { ListeEtudiantsComponent } from './composant/liste-etudiants/liste-etudiants.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationServicesService } from './services/authentification-services.service';
import { EtudiantServiceService } from './services/etudiant-service.service';
import { EnseignantServiceService } from './services/enseignant-service.service';
import { AdministrateurServiceService } from './services/administrateur-service.service';
import { NotesServicesService } from './services/notes-services.service';
import { MaterielServiceService } from './services/materiel-service.service';
import { FactureServiceService } from './services/facture-service.service';
import { ConvocationServiceService } from './services/convocation-service.service';
import { PayementServiceService } from './services/payement-service.service';
import { SurveillantComponent } from './composant/surveillant/surveillant.component';
import { ProviseurComponent } from './composant/proviseur/proviseur.component';
import { CenseurComponent } from './composant/censeur/censeur.component';
import { SecretaireComponent } from './composant/secretaire/secretaire.component';
import { SignUpComponent } from './composant/sign-up/sign-up.component';
import { AproposComponent } from './composant/apropos/apropos.component';
import { EmploieDuTempsServiceService } from './services/emploie-du-temps-service.service';
import { ClasseServiceService } from './services/classe-service.service';
import { ProfileEntiteComponent } from './profile-entite/profile-entite.component';



const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path:'', component:HomeComponent},
  {path:'connexion', component:AuthentificationComponent},
  {path: 'inscription', component:InscriptionComponent},
  {path: 'admin', component:AdminComponent},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AuthentificationComponent,
    InscriptionComponent,
    PageNotFoundComponent,
    AdminComponent,
    EtudiantComponent,
    EnseignantComponent,
    MaterielComponent,
    AdministrationComponent,
    ProfilComponent,
    ConvocationComponent,
    BulletinComponent,
    PayementComponent,
    ClasseComponent,
    CoursComponent,
    EmploieDuTempsComponent,
    InterfaceEtudiantComponent,
    InterfaceEnseignantComponent,
    InterfaceEconomeComponent,
    InterfaceSurveillantGeneralComponent,
    InterfaceAdministrateurComponent,
    AdministrateurComponent,
    InterfaceCenseurComponent,
    InterfaceProviseurComponent,
    InterfaceProfilComponent,
    InterfaceMaterielComponent,
    InterfaceEmploieDuTempsComponent,
    InterfaceBulletinComponent,
    ChatComponent,
    ContactComponent,
    FactureComponent,
    FicheInscriptionComponent,
    SignOutComponent,
    PresentationEtablisementScolaireComponent,
    ListeEtudiantsComponent,
    SurveillantComponent,
    ProviseurComponent,
    CenseurComponent,
    SecretaireComponent,
    SignUpComponent,
    AproposComponent,
    ProfileEntiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports:[RouterModule],
  providers: [AuthentificationServicesService,EtudiantServiceService,EnseignantServiceService,AdministrateurServiceService,NotesServicesService,
  MaterielServiceService,FactureServiceService,ConvocationServiceService,PayementServiceService,EmploieDuTempsServiceService,ClasseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
