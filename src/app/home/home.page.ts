import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: Router) {}

  redirigirLindo() {
    this.route.navigate(['/home/lindo']);
  }

  redirigirFeo() {
    this.route.navigate(['/home/feo']);
  }
}
