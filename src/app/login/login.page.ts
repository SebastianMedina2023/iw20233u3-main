import { Component } from '@angular/core';
import {UsuersService} from '../services/usuarios.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private UsuersService: UsuersService, private router: Router, private toastController: ToastController) { }

  username: string = '';
  password: string = '';

  showError: boolean = false;

  async login() {
    const isValid = this.UsuersService.authenticate(this.username, this.password);

    if (isValid) {
      this.router.navigate(['/tabs/tab1']);
    } else {
      const toast = await this.toastController.create({
        message: 'Credenciales incorrectas. Inténtalo de nuevo.',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }
  }
}
