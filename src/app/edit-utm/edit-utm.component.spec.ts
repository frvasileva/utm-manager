import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUtmComponent } from './edit-utm.component';

describe('EditUtmComponent', () => {
  let component: EditUtmComponent;
  let fixture: ComponentFixture<EditUtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
