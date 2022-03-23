import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablegymComponent } from './tablegym.component';

describe('TablegymComponent', () => {
  let component: TablegymComponent;
  let fixture: ComponentFixture<TablegymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablegymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablegymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
