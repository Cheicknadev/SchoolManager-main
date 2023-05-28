import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceMaterielComponent } from './interface-materiel.component';

describe('InterfaceMaterielComponent', () => {
  let component: InterfaceMaterielComponent;
  let fixture: ComponentFixture<InterfaceMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
