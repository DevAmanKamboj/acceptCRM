import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchDetailsComponent } from './church-details.component';

describe('ChurchDetailsComponent', () => {
  let component: ChurchDetailsComponent;
  let fixture: ComponentFixture<ChurchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
