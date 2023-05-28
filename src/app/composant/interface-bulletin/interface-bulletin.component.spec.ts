import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceBulletinComponent } from './interface-bulletin.component';

describe('InterfaceBulletinComponent', () => {
  let component: InterfaceBulletinComponent;
  let fixture: ComponentFixture<InterfaceBulletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceBulletinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
