import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationEtablisementScolaireComponent } from './presentation-etablisement-scolaire.component';

describe('PresentationEtablisementScolaireComponent', () => {
  let component: PresentationEtablisementScolaireComponent;
  let fixture: ComponentFixture<PresentationEtablisementScolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationEtablisementScolaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationEtablisementScolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
