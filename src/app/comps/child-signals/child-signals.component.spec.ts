import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSignalsComponent } from './child-signals.component';

describe('ChildSignalsComponent', () => {
  let component: ChildSignalsComponent;
  let fixture: ComponentFixture<ChildSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
