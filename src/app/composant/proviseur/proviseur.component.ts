import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'proviseur',
  templateUrl: './proviseur.component.html',
  styleUrls: ['./proviseur.component.css']
})
export class ProviseurComponent {
  @ViewChild('DisplayEmploi', { static: true }) DisplayEmploi!: TemplateRef<any>;

  // ...
  DisplayBulletin: boolean = false;
  // ...
  DisplayNote: boolean = false;
  //...
  DisplayProfil: boolean = false;
  //...
  //DisplayEmploi: boolean = true;
  //...
  DisplayPayement: boolean = false;
  //...
  DisplayAbsence: boolean = false;
  //...
  DisplayReclation: boolean = false;
  //...
  DisplaySupport: boolean = false;
  //...

  DisplayOrHiddenBulletin(): void {
    this.DisplayBulletin = !this.DisplayBulletin;
    this.DisplayNote = false;
    //this.DisplayEmploi = false;
    this.DisplayPayement = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }
  
  DisplayOrHiddenNote():void{
    this.DisplayNote = !this.DisplayNote;
    this.DisplayBulletin = false;
   // this.DisplayEmploi = false;
    this.DisplayPayement = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }

  DisplayOrHiddenEmploi():void{
   // this.DisplayEmploi = !this.DisplayEmploi;
    this.DisplayBulletin = false;
    this.DisplayNote = false;
    this.DisplayPayement = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }

  DisplayOrHiddenPayement():void{
    this.DisplayPayement = !this.DisplayPayement;
    this.DisplayBulletin = false;
    this.DisplayNote = false;
   // this.DisplayEmploi = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenAbsence():void{
    this.DisplayAbsence = !this.DisplayAbsence
    this.DisplayBulletin = false;
    this.DisplayNote = false;
    //this.DisplayEmploi = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayPayement = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenReclation():void{
    this.DisplayReclation = !this.DisplayReclation
    this.DisplayBulletin = false;
    this.DisplayNote = false;
    //this.DisplayEmploi = false;
    this.DisplaySupport = false;
    this.DisplayAbsence = false;
    this.DisplayPayement = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenSupport():void{
    this.DisplaySupport = !this.DisplaySupport
    this.DisplayBulletin = false;
    this.DisplayNote = false;
  //  this.DisplayEmploi = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplayPayement = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenProfil():void{
    this.DisplayProfil = !this.DisplayProfil
    this.DisplaySupport = false;
    this.DisplayBulletin = false;
    this.DisplayNote = false;
   // this.DisplayEmploi = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplayPayement = false;

  }
  // public onOpenModals( mode: string): void{
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'bulletinDisplay') {
  //     button.setAttribute('data-target', '#BulletinDisplayModal');
  //   }
  //   if (mode === 'noteDisplay') {
  //     button.setAttribute('data-target', '#NoteDisplayModal');
  //   }
  //   container?.appendChild(button);
  //   button.click()  ;
  // }
}
