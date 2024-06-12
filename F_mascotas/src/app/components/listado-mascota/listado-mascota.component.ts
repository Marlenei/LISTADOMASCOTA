import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Mascotas } from '../../interfaces/mascotas';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MascotaService } from '../../services/mascota.service';
import { first } from 'rxjs';



@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrl: './listado-mascota.component.css'
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<Mascotas>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(private _snackBar: MatSnackBar, private _mascotaService:MascotaService) { }

ngOnInit(): void {
  this.obtenerMascotas();
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

obtenerMascotas(){
  this.loading = true 
  this._mascotaService.getMascotas().subscribe( data => {
    this.loading = false;
    this.dataSource.data = data;
    })
}

  eliminarMascota(id:number) {
    this.loading = true;

    this._mascotaService.deleteMascota(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerMascotas();
    })
  }

  mensajeExito() {
    this._snackBar.open('La mascota fue eliminada con exito', '', {
      duration:2000,
      horizontalPosition: 'right',
    });

    }


}
