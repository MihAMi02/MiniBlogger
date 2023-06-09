import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptoolbarComponent } from './toptoolbar.component';

describe('ToptoolbarComponent', () => {
  let component: ToptoolbarComponent;
  let fixture: ComponentFixture<ToptoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptoolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToptoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
