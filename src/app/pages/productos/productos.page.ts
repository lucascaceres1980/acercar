import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  MyLocation,
  GoogleMapsAnimation,
  LatLng
} from '@ionic-native/google-maps';
import { Platform, LoadingController, ToastController } from "@ionic/angular";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  map: GoogleMap;
  loading: any;
  
  markers: any[] = [
    {
      position:{
        latitude: -34.7546449, 
        longitude: -58.4020362,
      },
      title:'Point 1',
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
    {
      position:{
        latitude: -34.7540587, 
        longitude: -58.4029581,
      },
      title:'Point 2',
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
    {
      position:{
        latitude: -34.7538395, 
        longitude: -58.4043443,
      },
      title:'Point 3',
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
    {
      position:{
        latitude: -34.5875541, 
        longitude: -58.4238660,
      },
      title:'Point 4',
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
    {
      position:{
        latitude: -34.5872597, 
        longitude: -58.4241788,
      },
      title:'Point 5',
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
  ];

  constructor( public loadingCtrl: LoadingController,
               public toastCtrl: ToastController,
               private platform: Platform ) { 
  }
  
  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap(); // Carga el mapa
    await this.localizar(); // Busca la localizacion del usuario
  }
  
  loadMap() {
    // Esta función inicializa la propiedad de clase map que va a contener el control de nuestro mapa de google
    // Para crear nuestro mapa debemos enviar como parametros el id del div en donde se va a renderizar el mapa 
    // (paso anterior)  las opciones que configuran nuestro mapa
    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: {
          lat: -2.1537488, // default location
          lng: -79.8883037 // default location
        },
        zoom: 18,
        tilt: 30
      }
    });

  }

  async localizar() {
    // Limpiamos todos los elementos de nuestro mapa
    this.map.clear();

    // Creamos un componente de Ionic para mostrar un mensaje mientras obtenemos esperamos que termine el proceso de
    // obtener la ubicación
    this.loading = await this.loadingCtrl.create({
      message: "Espera por favor..."
    });

    // Presentamos el componente creado en el paso anterior
    await this.loading.present();

    // For para que cargue los makers de los repartos
    this.markers.forEach(marker=>{
      this.addMarker(marker);
    });

    // Ejecutamos el método getMyLocation de nuestra propiedad de clase map para obtener nuestra ubicación actual
    this.map.getMyLocation()
      .then((location: MyLocation) => {
        // Una vez obtenida la ubicación cerramos el mensaje de diálogo
        this.loading.dismiss();

        // Movemos la camara a nuestra ubicación con una pequeña animación
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        });

        // Agregamos un nuevo marcador
        let marker: Marker = this.map.addMarkerSync({
          title: "Tu ubicación",
          snippet: "This plugin is awesome!",
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE,
          icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        });

        // Mostramos un InfoWindow
        marker.showInfoWindow();

        // Podemos configurar un evento que se ejecute cuando se haya dado clic
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast("clicked!");
        });

      })
      .catch(error => {
        // En caso de que haya un problema en obtener la ubicación
        this.loading.dismiss();
        this.showToast(error.error_message);
      });
  }

  addMarker(options){

    // Agregamos un nuevo marcador
    let markerOptions: Marker = this.map.addMarkerSync({
      title: options.title,
      snippet: "This plugin is awesome!",
      position: new LatLng(options.position.latitude, options.position.longitude),
      animation: GoogleMapsAnimation.BOUNCE,
      icon: options.icon
    });
    // Mostramos un InfoWindow
    markerOptions.showInfoWindow();

  }

  // Función que muestra un Toast en la parte inferior de la pantalla
  async showToast(mensaje) {
    let toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: "bottom"
    });
    toast.present();
  }
  
    
}
