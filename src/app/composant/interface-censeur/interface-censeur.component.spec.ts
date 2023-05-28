import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceCenseurComponent } from './interface-censeur.component';

describe('InterfaceCenseurComponent', () => {
  let component: InterfaceCenseurComponent;
  let fixture: ComponentFixture<InterfaceCenseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceCenseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceCenseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
