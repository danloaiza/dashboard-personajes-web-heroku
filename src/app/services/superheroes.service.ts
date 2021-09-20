import { Injectable } from '@angular/core';
import { SuperHeroe } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  superHeroes: SuperHeroe[] = [
    {
      nombre: 'Spiderman',
      editorial:'Marvel Comics',
      poderes: 'Fuerza, rapidez y reflejos proporcionales a una araña.',
      primeraAparicion: 'Amazing Fantasy #15',
      srcImagen: 'assets/img/spiderman.jpg'
    },
    {
      nombre:'Batman',
      editorial: 'DC Comics',
      poderes: 'artes marciales, Escapismo, uso de equipamento, dispositivos y armamento de alta tecnología',
      primeraAparicion: 'Detective Comics #27',
      srcImagen: 'assets/img/batman.jpg'
    },
    {
      nombre:'Acuaman',
      editorial: 'DC Comics',
      poderes: 'Telepatía, Dominación psiónica de la vida marina, Factor de curación, Portador del Tridente de Poseidón',
      primeraAparicion: 'More Fun Comics, #73 (noviembre de 1941).',
      srcImagen: 'assets/img/Aquaman.jpg'
    },
    {
      nombre: 'Superman',
      editorial: 'DC Comics',
      poderes: 'Vuelo, Súper oído, Visión de rayos-x, Aliento helado, Visión infra roja, Factor de curación acelerada',
      primeraAparicion: 'Action Comics #1',
      srcImagen: 'assets/img/Superman.png'
    },
    {
      nombre: 'Deadpool',
      editorial: 'Marvel Comics',
      poderes: 'Factor curativo, Fuerza, resistencia, agilidad y reflejos superhumanos',
      primeraAparicion: 'The New Mutants Nº 98 (febrero de 1991)​',
      srcImagen: 'assets/img/Deadpool.jpg'
    },
    {
      nombre: 'Thor',
      editorial: 'Marvel Comics',
      poderes: 'Posee fuerza superhumana, Gran velocidad, Intuición, Larga vida que posee por ser asgardiano',
      primeraAparicion: 'Journey Into Mystery #83 (agosto de 1962)​',
      srcImagen: 'assets/img/Thor.jpg'
    },
    {
      nombre: 'Wonder Woman',
      editorial: 'DC Comics',
      poderes: 'Super vuelo, Super velocidad, Reflejos, Resistencia',
      primeraAparicion: 'All Star Comics #8 (diciembre de 1941)​',
      srcImagen: 'assets/img/wonder.jpg'
    },
    {
      nombre: 'Iro man',
      editorial: 'Marvel Comics',
      poderes: 'Mente prodigiosa, Vínculo ciberpático con una versión anterior de su armadura, Vuelo, Rayos repulsores',
      primeraAparicion: 'Tales of Suspense # 39​',
      srcImagen: 'assets/img/Iron-man.jpg'
    },
    {
      nombre: 'Flash',
      editorial: 'DC Comics',
      poderes: 'Capacidad de correr más rápido que la luz, Reflejos sobrehumanos, Puede lanzar energía con sus manos',
      primeraAparicion: 'octubre de 1956',
      srcImagen: 'assets/img/flash.jpg'
    }
  ];

  constructor() { }
}
