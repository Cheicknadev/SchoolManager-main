import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceProviseurComponent } from './interface-proviseur.component';

describe('InterfaceProviseurComponent', () => {
  let component: InterfaceProviseurComponent;
  let fixture: ComponentFixture<InterfaceProviseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceProviseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceProviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
