import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { Mascotas } from '../interfaces/mascotas';



@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private myAppUrl: string = environment.endpoint;
  private miApiUrl: string = 'api/Mascota/';


  constructor(private http: HttpClient ) { }

  getMascotas(): Observable<Mascotas[]> {
    return this.http.get<Mascotas[]>(this.myAppUrl + this.miApiUrl)
  }

  getMascota(id: number): Observable<Mascotas> {
    return this.http.get<Mascotas> (this.myAppUrl + this.miApiUrl + id );
  }

  deleteMascota(id: number): Observable<void> {
    return this.http.delete<void> (this.myAppUrl + this.miApiUrl + id );
  }

  addMascota(mascota: Mascotas): Observable <Mascotas> {
    return this.http.post<Mascotas> (this.myAppUrl + this.miApiUrl, mascota );
  }

  updateMascota(id: number, mascota: Mascotas): Observable<void> {
    return this.http.put<void> (this.myAppUrl + this.miApiUrl + id, mascota );

  }
}
