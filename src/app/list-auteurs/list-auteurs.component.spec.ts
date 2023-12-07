import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuteursComponent } from './list-auteurs.component';

describe('ListAuteursComponent', () => {
  let component: ListAuteursComponent;
  let fixture: ComponentFixture<ListAuteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAuteursComponent]
    });
    fixture = TestBed.createComponent(ListAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
