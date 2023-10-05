import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User } from '@angular/fire/auth';
import { SplashScreen } from '@capacitor/splash-screen';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: Router, private auth: Auth) {}

  async redirigirLindo() {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
    this.route.navigate(['/home/lindo']);
  }

  async redirigirFeo() {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
    this.route.navigate(['/home/feo']);
  }

  async signOut() {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
    await this.auth.signOut();
    this.route.navigate(['/login']);
  }
}
