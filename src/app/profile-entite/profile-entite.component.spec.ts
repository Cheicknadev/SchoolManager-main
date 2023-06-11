import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEntiteComponent } from './profile-entite.component';

describe('ProfileEntiteComponent', () => {
  let component: ProfileEntiteComponent;
  let fixture: ComponentFixture<ProfileEntiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEntiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEntiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
