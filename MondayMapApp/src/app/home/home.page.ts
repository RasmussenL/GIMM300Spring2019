import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  @ViewChild('map') mapElement: ElementRef;

  map: any;
  latlng: any;

    constructor(private geolocation: Geolocation){
    }

    ngOnInit(){
      this.latlng = new google.maps.LatLng(-5,5);

      let mapOptions = {
        zoom: 10,
        center: this.latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullScreenControl: false
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }
    getGeolocation(){
      this.geolocation.getCurrentPosition().then(pos => {
        this.latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(this.latlng);
          }).catch((error) => {
            console.log('Error getting location', error);
          });
          
      }
    
}
