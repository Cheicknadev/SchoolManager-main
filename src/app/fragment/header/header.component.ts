import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showFonction : boolean= false;
  constructor(){}
  showFonctionPlaye(){
    this.showFonction = true;
  }
  hideFonction(){
    this.showFonction = false;
  }
  
  log(data: string): void {
    console.log(data);
  }
}
