import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Console } from 'console';
import { Mascotas } from '../../interfaces/mascotas';
import { MascotaService } from '../../services/mascota.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-mascotas',
  templateUrl: './agregar-editar-mascotas.component.html',
  styleUrl: './agregar-editar-mascotas.component.css'
})
export class AgregarEditarMascotasComponent implements OnInit{
  loading: boolean = false;
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar'
  
  constructor(private fb: FormBuilder, 
    private _mascotaService: MascotaService, 
    private _snackBar: MatSnackBar,
    private router : Router,
    private aRoute: ActivatedRoute  ){ 
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      color: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
    })
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
      console.log(this.id);

    }
  
  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerMascota(this.id);
    }
  }
  obtenerMascota(id: number) {
    this.loading=true;
    this._mascotaService.getMascota(id).subscribe(data => {
      this.form.setValue({
        nombre: data.nombre,
        color: data.color,
        edad: data.edad,
        raza: data.raza,
        peso: data.peso
      })
      this.loading = false

    })
  }


  agregarEditarMascota() {
    // const nombre = this.form.value.nombre; ----> ejemplo de como agregar valores


 //Armamos el objeto
    const mascota: Mascotas = {
      nombre: this.form.value.nombre,
      raza: this.form.value.raza,
      color: this.form.value.color,
      edad: this.form.value.edad,
      peso: this.form.value.peso
    }
    
    if (this.id != 0){
      mascota.id = this.id;
      this.editarMacota(this.id, mascota);
    } else {
      this.agregarMascota(mascota);
    }
  }

  editarMacota(id: number, mascota:Mascotas){
    this.loading= true
    this._mascotaService.updateMascota(id,mascota).subscribe(() =>{
      this.loading=false
      this.mensajeExito('actualizada');
      this.router.navigate(['/listMascota']);
    })
  }
  agregarMascota (mascota:Mascotas) { //Enviamos el objeto al back-end
      this._mascotaService.addMascota(mascota).subscribe(data =>{
        this.mensajeExito('registrada');
        this.router.navigate(['/listMascota']);
      })}


  mensajeExito(texto: string) {
    this._snackBar.open(`La mascota fue ${texto} con exito`, '', {
      duration:2000,
      horizontalPosition: 'right',
    });

    }


}
