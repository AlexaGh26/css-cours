import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHelpComponent } from './section-help.component';

describe('SectionHelpComponent', () => {
  let component: SectionHelpComponent;
  let fixture: ComponentFixture<SectionHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
