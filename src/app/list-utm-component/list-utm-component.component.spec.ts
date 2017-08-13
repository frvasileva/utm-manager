import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtmComponentComponent } from './list-utm-component.component';

describe('ListUtmComponentComponent', () => {
  let component: ListUtmComponentComponent;
  let fixture: ComponentFixture<ListUtmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUtmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUtmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
