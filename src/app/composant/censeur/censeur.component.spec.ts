import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenseurComponent } from './censeur.component';

describe('CenseurComponent', () => {
  let component: CenseurComponent;
  let fixture: ComponentFixture<CenseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
