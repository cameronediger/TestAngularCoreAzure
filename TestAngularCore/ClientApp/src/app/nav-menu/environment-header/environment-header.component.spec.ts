import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonService } from '../../services/common.service';
import { EnvironmentHeaderComponent } from './environment-header.component';

describe('EnvironmentHeaderComponent', () => {
  let mockCommonService;
  let component: EnvironmentHeaderComponent;
  let fixture: ComponentFixture<EnvironmentHeaderComponent>;

  beforeEach(async(() => {
    mockCommonService = jasmine.createSpyObj(['environment'])
    TestBed.configureTestingModule({
      declarations: [EnvironmentHeaderComponent],
      providers: [
        { provide: CommonService, useValue: mockCommonService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockCommonService.environment.and.returnValue("Development");
    fixture = TestBed.createComponent(EnvironmentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
