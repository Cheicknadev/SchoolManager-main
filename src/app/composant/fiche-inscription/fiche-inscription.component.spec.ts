import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheInscriptionComponent } from './fiche-inscription.component';

describe('FicheInscriptionComponent', () => {
  let component: FicheInscriptionComponent;
  let fixture: ComponentFixture<FicheInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
