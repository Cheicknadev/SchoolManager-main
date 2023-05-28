import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceSurveillantGeneralComponent } from './interface-surveillant-general.component';

describe('InterfaceSurveillantGeneralComponent', () => {
  let component: InterfaceSurveillantGeneralComponent;
  let fixture: ComponentFixture<InterfaceSurveillantGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceSurveillantGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceSurveillantGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
