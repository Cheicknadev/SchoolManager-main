import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEmploieDuTempsComponent } from './interface-emploie-du-temps.component';

describe('InterfaceEmploieDuTempsComponent', () => {
  let component: InterfaceEmploieDuTempsComponent;
  let fixture: ComponentFixture<InterfaceEmploieDuTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceEmploieDuTempsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceEmploieDuTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
