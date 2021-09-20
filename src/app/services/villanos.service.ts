import { Injectable } from '@angular/core';
import { Villano } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  villanos: Villano[] = [
    {
      nombre: 'Norman Osborn',
      editorial:'Marvel Comics',
      descripcion: 'gran enemigo de Spider-man. Se trata de un industrial dueño de Oscorp, ' +
                    'una empresa armamentística puntera, que sufre un trastorno serio de personalidad' +
                    'múltiple y esquizonfrenia debido un suero experimental que mejoraba las habilidades físicas de quien lo ingiriera',
      primeraAparicion: 'The Amazing Spider-Man #37 (1966)',
      srcImagen: 'assets/img/norman-osborn.jpg'
    },
    {
      nombre:'Magneto',
      editorial: 'Marvel Comics',
      descripcion: 'Se trata de un mutante capaz de controlar los campos magnéticos, pudiendo manipular el metal con su mente',
      primeraAparicion: 'The X-Men #1 (1963)',
      srcImagen: 'assets/img/magneto.jpg'
    },
    {
      nombre:'Thanos',
      editorial: 'Marvel Comics',
      descripcion: 'Es un ser aliénigena, nacido en la sociedad de los Eternos de TItán, una de las lunas de Saturno.',
      primeraAparicion: 'More Fun Comics, #73 (noviembre de 1941).',
      srcImagen: 'assets/img/thanos.jpg'
    },
    {
      nombre: 'Loki',
      editorial: 'DC Comics',
      descripcion: 'El dios nórdico de las Mentiras y el Engaño. Y el hermano adoptivo de Thor según la mitología' +
                     'de Marvel y también su mayor rival clásico. ',
      primeraAparicion: 'Journey into Mystery #85 (1962)',
      srcImagen: 'assets/img/Loki.jpg'
    },
    {
      nombre: 'Joker',
      editorial: 'DC Comics',
      descripcion: 'Considerado el mejor villano de cómics. Antes de ser villano, era un patético comediante que tuvo que ' +
                    'realizar actos delictivos para poder pagar algunas deudas.',
      primeraAparicion: 'Batman 1(1940)',
      srcImagen: 'assets/img/joker.jpg'
    }
  ];

  constructor() { }
}
