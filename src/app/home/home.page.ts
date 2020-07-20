import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  options: { img: string, title: string, desc: string }[] = [
    {
      img: '/assets/home/photos.svg',
      title: 'Productos',
      desc: ''
    },
    {
      img: '/assets/home/music-player-2.svg',
      title: 'Establecimientos',
      desc: ''
    },
    {
      img: '/assets/home/calendar.svg',
      title: 'Repartos a tu casa',
      desc: ''
    },
    {
      img: '/assets/home/placeholder-1.svg',
      title: 'Comercializarores',
      desc: ''
    }
  ];


  constructor() {}

}
