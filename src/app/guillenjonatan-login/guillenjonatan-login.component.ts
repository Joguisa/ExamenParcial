import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guillenjonatan-login',
  templateUrl: './guillenjonatan-login.component.html',
  styleUrls: ['./guillenjonatan-login.component.css']
})
export class GuillenjonatanLoginComponent implements OnInit {

  loading = false;

  constructor(private router: Router, private _snackBar: MatSnackBar) {  }

  usuarioLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.usuarioLogin.value.usuario=="jonatan" && this.usuarioLogin.value.password=="12345"){
      this.loadSpinner();
    } else {
      this.error();
      this.usuarioLogin.reset();
    }
  }

  error() {
    this._snackBar.open('Usuario o Contraseña Ingresados son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  loadSpinner () {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/ingresar']);
    }, 1000);
  }


}
