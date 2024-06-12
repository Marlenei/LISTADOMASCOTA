import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { AgregarEditarMascotasComponent } from './components/agregar-editar-mascotas/agregar-editar-mascotas.component';
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Modulos
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarMascotasComponent,
    ListadoMascotaComponent,
    VerMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
