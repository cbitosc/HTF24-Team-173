import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePgComponent } from './profile-pg.component';

describe('ProfilePgComponent', () => {
  let component: ProfilePgComponent;
  let fixture: ComponentFixture<ProfilePgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
