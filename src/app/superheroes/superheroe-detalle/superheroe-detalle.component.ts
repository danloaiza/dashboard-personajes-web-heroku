import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperHeroe } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-superheroe-detalle',
  templateUrl: './superheroe-detalle.component.html',
  styleUrls: ['./superheroe-detalle.component.css']
})
export class SuperheroeDetalleComponent implements OnInit {

  superHeroe!: SuperHeroe;

  constructor(private activateRoute: ActivatedRoute) {

    this.activateRoute.queryParams.subscribe(params => {
      if(params && params.pSuperheroeDetalle) {
        this.superHeroe = JSON.parse(params.pSuperheroeDetalle);
      }
    });
   }

  ngOnInit(): void {
  }

}
