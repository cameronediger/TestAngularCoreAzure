import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentHeaderComponent } from './environment-header.component';

describe('EnvironmentHeaderComponent', () => {
  let component: EnvironmentHeaderComponent;
  let fixture: ComponentFixture<EnvironmentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
