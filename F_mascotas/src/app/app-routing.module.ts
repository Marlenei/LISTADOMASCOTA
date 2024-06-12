import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { AgregarEditarMascotasComponent } from './components/agregar-editar-mascotas/agregar-editar-mascotas.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

const routes: Routes = [
  {path: '', redirectTo: 'listMascota', pathMatch: 'full'},
  {path: 'listMascota', component: ListadoMascotaComponent},
  {path: 'agregarMascota', component: AgregarEditarMascotasComponent},
  {path: 'verMascota/:id', component: VerMascotaComponent},
  {path: 'editarMascota/:id', component: AgregarEditarMascotasComponent},
  {path: '**', redirectTo: 'listMascota', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
