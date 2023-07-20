import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuthorsComponent } from './view-authors.component';

describe('ViewAuthorsComponent', () => {
  let component: ViewAuthorsComponent;
  let fixture: ComponentFixture<ViewAuthorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAuthorsComponent]
    });
    fixture = TestBed.createComponent(ViewAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
