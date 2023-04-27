import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsDialogueComponent } from './profile-settings-dialogue.component';

describe('ProfileSettingsDialogueComponent', () => {
  let component: ProfileSettingsDialogueComponent;
  let fixture: ComponentFixture<ProfileSettingsDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSettingsDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSettingsDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
