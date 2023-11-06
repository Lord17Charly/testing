import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LinearRegressionComponent } from './linear-regression.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MediaComponent } from '../media/media.component';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent],
      imports: [HttpClientModule],
      providers: [MediaComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit()
  });
  
  //DATA TEST1
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return b0=-22.55 with the dataset Data_Test 1', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calcularb0(component.test1x, component.test1y)).toBeCloseTo(-22.55, 2);
    });
  }))

  it('Should return b1 = 1.7279 with the dataset Data_Test1', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calcularb1(component.test1x, component.test1y)).toBeCloseTo(1.7279, 2);
    });
  }))

  it('should return yk=644.429 with the dataset Data_Test1 id x= 386', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calculoPrediction(386, component.test1x, component.test1y)).toBeCloseTo(644.429, 2);
    });
  }))

  //DATA TEST2
  it('should return B0=-4.039 with the dataset Data_Test2', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calcularb0(component.test2x, component.test2y)).toBeCloseTo(-4.039, 2);
    });
  }));

  it('should return B1=0.1681 with the dataset Data_Test2', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calcularb1(component.test2x, component.test2y)).toBeCloseTo(0.1681, 2);
    })
  }));

  it('should return yk=60.858 with the dataset Data_Test2 if x=386', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calculoPrediction(386, component.test2x, component.test2y)).toBeCloseTo(60.858, 2);
    })
  }))

  //DATA TEST3
  it('should return B0=-23.92 with the dataset Data_Test3', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calcularb0(component.test3x, component.test3y)).toBeCloseTo(-23.92, 2);
    })
  }));

  it('should return B1=1.43097 with the dataset Data_Test3', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calcularb1(component.test3x, component.test3y)).toBeCloseTo(1.43097, 2);
    })
  }));

  it('should return yk=528.4294 with the dataset Data_Test if x=386', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calculoPrediction(386, component.test3x, component.test3y)).toBeCloseTo(528.4294, 2);
    })
  }));

  // TODO: DATA TEST4
  it('should return B0=-4.604 with the dataset Data_Test4', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calcularb0(component.test4x, component.test4y)).toBeCloseTo(-4.604, 2);
    })
  }));

  it('should return B1=0.14016 with the dataset Data_Test4', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calcularb1(component.test4x, component.test4y)).toBeCloseTo(0.14016, 2);
    })
  }));

  it('should return yk=49.4994 with the dataset Data_Test4 if x=386', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.calculoPrediction(386, component.test4x, component.test4y)).toBeCloseTo(49.4994, 4);
    })
  }));
})