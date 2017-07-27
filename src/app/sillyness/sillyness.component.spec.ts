import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillynessComponent } from './sillyness.component';

describe('SillynessComponent', () => {
  let component: SillynessComponent;
  let fixture: ComponentFixture<SillynessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillynessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillynessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
