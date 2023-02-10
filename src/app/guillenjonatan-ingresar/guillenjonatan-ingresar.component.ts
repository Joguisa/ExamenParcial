import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Producto } from '../interfaces/producto';
import { ProductoService } from '../servicios/producto.service';


@Component({
  selector: 'app-guillenjonatan-ingresar',
  templateUrl: './guillenjonatan-ingresar.component.html',
  styleUrls: ['./guillenjonatan-ingresar.component.css']
})
export class GuillenjonatanIngresarComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private _productoService: ProductoService, 
              private router: Router, 
              private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      pcompra: ['', Validators.required],
      pventa: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    //console.log(this.form);

    const product: Producto = {
      codigo: this.form.value.codigo,
      descripcion: this.form.value.descripcion,
      pcompra: this.form.value.pcompra,
      pventa: this.form.value.pventa,
    }

    //console.log(product);

    this._snackBar.open('El Producto ha sido agregado con éxito', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });

    this._productoService.agregarProductoo(product);    

  }

  limpiarFormulario(){
    this.form.reset();
  }

  consultarProducto() {
    this.router.navigate(['/inicio']);
  }
}
