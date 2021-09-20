import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Villano } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-villano-detalle',
  templateUrl: './villano-detalle.component.html',
  styleUrls: ['./villano-detalle.component.css']
})
export class VillanoDetalleComponent implements OnInit {

  villano!: Villano;

  constructor(private activateRoute: ActivatedRoute) {

    this.activateRoute.queryParams.subscribe(params => {
      if(params && params.pVillanoDetalle) {
        this.villano = JSON.parse(params.pVillanoDetalle);
      }
    });
   }

  ngOnInit(): void {
  }

}
