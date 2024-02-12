import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDireComponent } from './card-dire.component';

describe('CardDireComponent', () => {
  let component: CardDireComponent;
  let fixture: ComponentFixture<CardDireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
