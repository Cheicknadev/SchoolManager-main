import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceProfilComponent } from './interface-profil.component';

describe('InterfaceProfilComponent', () => {
  let component: InterfaceProfilComponent;
  let fixture: ComponentFixture<InterfaceProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
