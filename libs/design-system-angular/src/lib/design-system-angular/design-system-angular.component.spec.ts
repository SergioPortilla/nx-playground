import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignSystemAngularComponent } from './design-system-angular.component';

describe('DesignSystemAngularComponent', () => {
  let component: DesignSystemAngularComponent;
  let fixture: ComponentFixture<DesignSystemAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSystemAngularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignSystemAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
