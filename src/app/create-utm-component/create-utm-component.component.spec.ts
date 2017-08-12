import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtmComponentComponent } from './create-utm-component.component';

describe('CreateUtmComponentComponent', () => {
  let component: CreateUtmComponentComponent;
  let fixture: ComponentFixture<CreateUtmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUtmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUtmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
