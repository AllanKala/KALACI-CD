import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFilmsComponent } from './image-films.component';

describe('ImageFilmsComponent', () => {
  let component: ImageFilmsComponent;
  let fixture: ComponentFixture<ImageFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageFilmsComponent]
    });
    fixture = TestBed.createComponent(ImageFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
