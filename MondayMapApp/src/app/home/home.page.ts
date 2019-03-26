import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

@ViewChild('map') mapElement: ElementRef;
location: Location = {
  latitude: 0,
  longitude: 0
}
map: any;
latlng: any;

constructor(private geolocation: Geolocation) {
  this.latlng = new google.maps.LatLng(-5, 5);
 }

ngOnInit() {
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
getGeoLocation(){
  this.geolocation.getCurrentPosition().then(pos => {
  this.location.latitude = pos.coords.latitude;
  this.location.longitude = pos.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.latlng = new google.maps.LatLng(this.location.latitude, this.location.longitude);
    this.map.setCenter(this.latlng);
}
}
