import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsHandlerComponent } from './posts-handler.component';

describe('PostsHandlerComponent', () => {
  let component: PostsHandlerComponent;
  let fixture: ComponentFixture<PostsHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
