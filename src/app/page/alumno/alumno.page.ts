import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  
  goToverification() {
    this.navCtrl.navigateForward('/verificacion')
  }

  goToRamos() {
    this.navCtrl.navigateForward('/ramos')
  }

  goTolista_alumno() {
    this.navCtrl.navigateForward('/lista-alumno')
  }

  ngOnInit() {
  }

}
