import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviseurComponent } from './proviseur.component';

describe('ProviseurComponent', () => {
  let component: ProviseurComponent;
  let fixture: ComponentFixture<ProviseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
