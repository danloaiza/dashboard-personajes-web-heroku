import { VillanoDetalleComponent } from './villanos/villano-detalle/villano-detalle.component';
import { SuperheroeDetalleComponent } from './superheroes/superheroe-detalle/superheroe-detalle.component';
import { VillanosComponent } from './villanos/villanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'superheroes',
    component: SuperheroesComponent
  },
  {
    path: 'villanos',
    component: VillanosComponent
  },
  {
    path: 'superheroe-detalle',
    component: SuperheroeDetalleComponent
  },
  {
    path: 'villano-detalle',
    component: VillanoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
