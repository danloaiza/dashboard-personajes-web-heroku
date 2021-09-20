import { SuperheroesService } from './../services/superheroes.service';
import { Component, OnInit } from '@angular/core';
import { SuperHeroe } from '../interfaces/interfaces';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})
export class SuperheroesComponent implements OnInit {

  superheroes: SuperHeroe[]=[];

  constructor( private superheroesService: SuperheroesService, private router: Router) { }

  ngOnInit(): void {
    this.superheroes = this.superheroesService.superHeroes;
  }

  detalleSuperheroe( pSuperheroe: SuperHeroe ) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        pSuperheroeDetalle: JSON.stringify(pSuperheroe)
      }
    };

    this.router.navigate(['/superheroe-detalle'], navigationExtras);
  }

}
