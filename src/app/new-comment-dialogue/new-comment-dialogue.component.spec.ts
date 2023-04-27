import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommentDialogueComponent } from './new-comment-dialogue.component';

describe('NewCommentDialogueComponent', () => {
  let component: NewCommentDialogueComponent;
  let fixture: ComponentFixture<NewCommentDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommentDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCommentDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
