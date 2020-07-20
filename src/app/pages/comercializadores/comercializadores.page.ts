import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comercializarores',
  templateUrl: './comercializarores.page.html',
  styleUrls: ['./comercializarores.page.scss'],
})
export class ComercializaroresPage implements OnInit {

  comercios: { img: string, name: string, desc: string, adress: string }[] = [
    {
      img: './assets/user-6.svg',
      name: 'Carlos',
      desc: 'Verduleria',
      adress: 'Uspallata 3160, Parque Patricios'
    },
    {
      img: './assets/user-6.svg',
      name: 'Jose',
      desc: 'Carniceria',
      adress: 'Uspallata 3160, Parque Patricios'
    },
    {
      img: './assets/user-6.svg',
      name: 'Manuel',
      desc: 'Almacen',
      adress: 'Uspallata 3160, Parque Patricios'
    },
    {
      img: './assets/user-6.svg',
      name: 'Lucas',
      desc: 'Heladeria',
      adress: 'Uspallata 3160, Parque Patricios'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
