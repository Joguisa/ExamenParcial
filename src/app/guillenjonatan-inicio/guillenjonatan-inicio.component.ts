import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from '../interfaces/producto';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-guillenjonatan-inicio',
  templateUrl: './guillenjonatan-inicio.component.html',
  styleUrls: ['./guillenjonatan-inicio.component.css']
})

export class GuillenjonatanInicioComponent implements OnInit{

  listProductos: Producto[] = [];

  displayedColumns: string[] = ['codigo', 'descripcion', 'pcompra', 'pventa', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _productoService: ProductoService ){}

  ngOnInit(): void {
    this.cargarProducto();
  }

  cargarProducto() {
    this.listProductos = this._productoService.getProducto();
    this.dataSource = new MatTableDataSource(this.listProductos);
  }

  eliminarProducto(index: number){
    this._productoService.eliminarProducto(index);
    this.cargarProducto();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
