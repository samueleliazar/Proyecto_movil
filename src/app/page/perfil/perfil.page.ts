import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user: User | null = null;

  constructor(private navCtrl: NavController, private alertController: AlertController, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    console.log('Usuario actual:', this.user); // Esto te ayudará a depurar
}

  async cerrar_sesion() {

    this.userService.logout();

    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'La sesión se cerró correctamente.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/home']);
          },
          cssClass: 'alert-button-white',
        },
      ],
    });
    alert.cssClass = 'custom-alert';

    await alert.present();
  }
}