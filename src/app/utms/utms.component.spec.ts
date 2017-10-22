import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmsComponent } from './utms.component';

describe('UtmsComponent', () => {
  let component: UtmsComponent;
  let fixture: ComponentFixture<UtmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
