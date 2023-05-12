import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSpaceComponent } from './cards-space.component';

describe('CardsSpaceComponent', () => {
  let component: CardsSpaceComponent;
  let fixture: ComponentFixture<CardsSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
