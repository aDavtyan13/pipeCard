import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPipeComponent } from './card-pipe.component';

describe('CardPipeComponent', () => {
  let component: CardPipeComponent;
  let fixture: ComponentFixture<CardPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
