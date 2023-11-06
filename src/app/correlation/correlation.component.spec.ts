import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CorrelationComponent } from './correlation.component';
import { HttpClientModule } from '@angular/common/http';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(() => {
    // Configuración del módulo de pruebas
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      imports: [HttpClientModule],
    });
    // Creación del componente y detección de cambios
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Inicialización del componente
    component.ngOnInit()
  });

  it('should create', () => {
    // Prueba unitaria para verificar que el componente se haya creado correctamente
    expect(component).toBeTruthy();
  });

  // Pruebas unitarias para verificar los resultados de los cálculos de correlación y coeficiente de determinación
  // para diferentes conjuntos de datos

  // TEST 1
  it('should return r=0.9545 with the dataset Data_Test1', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.correlationCoefficient(component.test1x, component.test1y)).toBeCloseTo(0.9545, 2)
    });
  }));

  it('should return rr=0.9111 with the dataset Data_Test1', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.rcuadrada(component.test1x, component.test1y)).toBeCloseTo(0.9111, 2);
    });
  }));

  // TEST 2
  it('should return r=0.9333 with the dataset Data_Test2', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.correlationCoefficient(component.test2x, component.test2y);
      expect(result).toBeCloseTo(0.9333, 2);
    });
  }));

  it('should return rr=0.8711 with the dataset Data_Test2', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.rcuadrada(component.test2x, component.test2y);
      expect(result).toBeCloseTo(0.8711, 2);
    });
  }));

  // TEST 3
  it('should return r=0.9631 with the dataset Data_Test3', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.correlationCoefficient(component.test3x, component.test3y);
      expect(result).toBeCloseTo(0.9631, 4);
    });
  }));

  it('should return rr=0.9276 with the dataset Data_Test3', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.rcuadrada(component.test3x, component.test3y);
      expect(result).toBeCloseTo(0.9276, 4);
    });
  }));

  // TEST 4
  it('should return r=0.9480 with the dataset Data_Test4', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.correlationCoefficient(component.test4x, component.test4y);
      expect(result).toBeCloseTo(0.9480, 4);
    });
  }));

  it('should return rr=0.8988 with the dataset Data_Test4', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.rcuadrada(component.test4x, component.test4y);
      expect(result).toBeCloseTo(0.8988, 4);
    });
  }));
});