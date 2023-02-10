import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuillenjonatanIngresarComponent } from './guillenjonatan-ingresar/guillenjonatan-ingresar.component';
import { GuillenjonatanInicioComponent } from './guillenjonatan-inicio/guillenjonatan-inicio.component';
import { GuillenjonatanLoginComponent } from './guillenjonatan-login/guillenjonatan-login.component';

const routes: Routes = [
  { path: '', component: GuillenjonatanLoginComponent  },
  { path: 'login', component: GuillenjonatanLoginComponent  },
  { path: 'inicio', component: GuillenjonatanInicioComponent  },
  { path: 'ingresar', component: GuillenjonatanIngresarComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

