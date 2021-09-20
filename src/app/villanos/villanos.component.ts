import { Villano } from './../interfaces/interfaces';
import { VillanosService } from './../services/villanos.service';
import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

  villanos: Villano[] = [];

  constructor(private _config: NgbCarouselConfig, private villanosService: VillanosService, private router: Router) {
    _config.pauseOnHover = true;
    _config.showNavigationArrows = true;
  }

  ngOnInit(): void {

    this.villanos = this.villanosService.villanos;

  }

  detalleVillano( pVillano: Villano ) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        pVillanoDetalle: JSON.stringify(pVillano)
      }
    };

    this.router.navigate(['/villano-detalle'], navigationExtras);
  }

}
