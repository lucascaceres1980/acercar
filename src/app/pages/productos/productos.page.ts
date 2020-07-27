import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: { icon: string, name: string, desc: string, redirectTo: string, class: string }[] = [
    {
      icon: './assets/productos/apple.svg',
      name: 'Frutas',
      desc: 'Verdulerias por la zona',
      redirectTo: '/frutas',
      class: "frutas"
    },
    {
      icon: './assets/productos/tomato.svg',
      name: 'Verduras',
      desc: 'Verdulerias por la zona',
      redirectTo: '/verduras',
      class: "verduras"
    },
    {
      icon: './assets/productos/steak.svg',
      name: 'Carnes',
      desc: 'Carnicerias y pollerias por la zona',
      redirectTo: '/carnes',
      class: "carnes"
    },
    {
      icon: './assets/productos/fish.svg',
      name: 'Pescados',
      desc: 'Pescaderias por la zona',
      redirectTo: '/pescados',
      class: "pescados"
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }  
    
}
