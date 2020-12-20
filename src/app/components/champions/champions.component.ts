import { Component, OnInit } from '@angular/core';
import { Champions } from 'src/app/models/champions.model';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  champs: Champions[] = [
    {
      id: 1,
      nombre: 'Aatrox',
      rol: 'Luchador',
      historia: 'Aatrox y sus hermanos, otrora respetados defensores de Shurima contra el Vacío, acabarían convirtiéndose en una amenaza aún mayor para Runaterra y solo conocieron la derrota ante el uso astuto de hechizos mortales. No obstante, tras siglos de reclusión, Aatrox fue el primero en recuperar su libertad y se dedicó a corromper y transformar a cualquier necio que intentase empuñar el arma mágica que contenía su esencia. Ahora, envuelto en carne y huesos que no le pertenecen y que ha transformado en una horrenda aproximación de su antiguo aspecto, recorre Runaterra en busca de la apocalíptica venganza que tanto anhela.',
      lugar: 'Shurima',
      image: '../../../assets/images/aatrox.jpg'
    },
    {
      id: 2,
      nombre: 'Ahri',
      rol: 'Asesina',
      historia: 'Ahri es una vastaya conectada de forma innata al poder latente de Runaterra, y es capaz de convertir la magia en orbes de energía pura. Le gusta jugar con su presa, manipulando sus emociones antes de devorar su esencia de vida. A pesar de su naturaleza depredadora, Ahri posee cierto sentido de la empatía, ya que recibe recuerdos de cada alma que consume.',
      lugar: 'Jonia',
      image: '../../../assets/images/ahri.jpg'
    },
    {
      id: 3,
      nombre: 'Akali',
      rol: 'Asesina',
      historia: 'Tras abandonar la orden de los Kinkou y su título de Puño de la Sombra, Akali actúa ahora en solitario y está lista para convertirse en el arma mortal que necesita su gente. Aunque no renuncia a las enseñanzas de Shen, su maestro, ha jurado defender Jonia de sus enemigos, asesinándolos uno a uno. Los ataques de Akali son silenciosos, pero su mensaje se escucha con toda claridad: temed a la asesina sin maestro.',
      lugar: 'Jonia',
      image: '../../../assets/images/akali.jpg'
    },
    {
      id: 4,
      nombre: 'Alistar',
      rol: 'Tanque',
      historia: 'Alistar, un poderoso guerrero con una reputación temible, busca venganza por la muerte de su clan a manos del imperio noxiano. Aunque fue esclavizado y forzado a vivir como gladiador, fue su voluntad inquebrantable lo que le impidió convertirse en una verdadera bestia. Ahora, libre de las cadenas de sus antiguos amos, lucha en nombre de los oprimidos y los desfavorecidos, y empuña su furia como un arma, igual de peligrosa que sus cuernos, puños y pezuñas.',
      lugar: 'Noxus',
      image: '../../../assets/images/alistar.jpg'
    },
    {
      id: 5,
      nombre: 'Amumu',
      rol: 'Tanque',
      historia: 'Cuenta la leyenda que Amumu es un alma solitaria y melancólica de la vieja Shurima que vaga por el mundo en busca de un amigo. Condenado por una maldición ancestral, su destino es permanecer solo para siempre, pues su tacto es muerte y su cariño, la perdición. Aquellos que afirman haberlo visto lo describen como un cadáver viviente, menudo y cubierto de vendajes. Amumu ha suscitado mitos, canciones y folclore transmitidos de generación en generación, hasta tal punto que ya es imposible separar la realidad de la ficción.',
      lugar: 'Shurima',
      image: '../../../assets/images/amumu.jpg'
    }
  ];

}
