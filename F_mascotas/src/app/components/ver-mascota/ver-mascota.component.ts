import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { Observable, first } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Mascotas } from '../../interfaces/mascotas';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrl: './ver-mascota.component.css'
})
export class VerMascotaComponent implements OnInit {
  id!: number;
  mascota!: Mascotas;
  loading: boolean = false;

  // mascota$!: Observable <Mascotas> ---> PIPE ASYNC

  constructor(private _mascotaService: MascotaService, 
    private aRoute: ActivatedRoute) {
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
   
    }

  ngOnInit(): void {
    // this.mascota$ = this._mascotaService.getMascota(this.id) --> PIPE ASYNC
    // this.aRoute.params.subscribe(data => {
    //   this.id = data['id'];
    // })
    this.obtenerMascota();
  }

  obtenerMascota() {
    this.loading=true
    this._mascotaService.getMascota(this.id).subscribe ( data => {
      this.mascota = data;
      this.loading = false;  
    })

  }

}
