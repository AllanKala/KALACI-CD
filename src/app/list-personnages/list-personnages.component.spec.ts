import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonnagesComponent } from './list-personnages.component';

describe('ListPersonnagesComponent', () => {
  let component: ListPersonnagesComponent;
  let fixture: ComponentFixture<ListPersonnagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPersonnagesComponent]
    });
    fixture = TestBed.createComponent(ListPersonnagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
