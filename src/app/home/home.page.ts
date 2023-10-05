import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User } from '@angular/fire/auth';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: Router, private auth: Auth) {}

  redirigirLindo() {
    this.route.navigate(['/home/lindo']);
  }

  redirigirFeo() {
    this.route.navigate(['/home/feo']);
  }

  async signOut() {
    await this.auth.signOut();
    this.route.navigate(['/login']);
  }
}
