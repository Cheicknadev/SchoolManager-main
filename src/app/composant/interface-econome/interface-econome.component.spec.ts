import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEconomeComponent } from './interface-econome.component';

describe('InterfaceEconomeComponent', () => {
  let component: InterfaceEconomeComponent;
  let fixture: ComponentFixture<InterfaceEconomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceEconomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceEconomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
