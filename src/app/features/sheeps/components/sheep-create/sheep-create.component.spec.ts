import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepCreateComponent } from './sheep-create.component';

describe('SheepCreateComponent', () => {
  let component: SheepCreateComponent;
  let fixture: ComponentFixture<SheepCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheepCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheepCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
