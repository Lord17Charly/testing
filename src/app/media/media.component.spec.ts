import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MediaComponent } from './media.component';
import { of } from 'rxjs';
import { MediaService } from '../services/media.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';


describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MediaService

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MediaComponent],

      imports: [HttpClientModule], // Añade HttpClientTestingModule aquí

      providers: [MediaService],
    }).compileComponents();
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();

  });

  it('Should return mean=60.32 with the data DEV', waitForAsync(() => {

    // Realiza la solicitud HTTP en tu componente.

    // Deja que Angular maneje la solicitud HTTP.
    fixture.whenStable().then(() => {

      expect(component.calcularMedia(component.averageDev)).toBe(60.32);
    });
  }));

  it('Should return mean=550.6 with the data Proxy', waitForAsync(() => {
    // Realiza la solicitud HTTP en tu componente.

    // Deja que Angular maneje la solicitud HTTP.
    fixture.whenStable().then(() => {
      expect(component.calcularMedia(component.averageProxy)).toBe(550.6);

    });
  }));
});