import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEvenementsComponent } from './list-evenements.component';

describe('ListEvenementsComponent', () => {
  let component: ListEvenementsComponent;
  let fixture: ComponentFixture<ListEvenementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEvenementsComponent]
    });
    fixture = TestBed.createComponent(ListEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
