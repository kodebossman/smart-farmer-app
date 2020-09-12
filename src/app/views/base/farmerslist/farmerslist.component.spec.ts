import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerslistComponent } from './farmerslist.component';

describe('FarmerslistComponent', () => {
  let component: FarmerslistComponent;
  let fixture: ComponentFixture<FarmerslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
