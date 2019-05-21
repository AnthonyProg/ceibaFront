import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkedListComponent } from './parked-list.component';

describe('ParkedListComponent', () => {
  let component: ParkedListComponent;
  let fixture: ComponentFixture<ParkedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
