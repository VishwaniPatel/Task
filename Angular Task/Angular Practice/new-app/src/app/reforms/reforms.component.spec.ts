import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformsComponent } from './reforms.component';

describe('ReformsComponent', () => {
  let component: ReformsComponent;
  let fixture: ComponentFixture<ReformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
