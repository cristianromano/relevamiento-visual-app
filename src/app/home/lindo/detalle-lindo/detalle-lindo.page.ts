import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-detalle-lindo',
  templateUrl: './detalle-lindo.page.html',
  styleUrls: ['./detalle-lindo.page.scss'],
})
export class DetalleLindoPage implements OnInit {
  app = initializeApp(environment.firebase);
  db = getDatabase(this.app);
  datosImg: any[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      const refImg = ref(this.db, '/imagenes/lindo/');
      onValue(refImg, (snapshot) => {
        const data = snapshot.val();
        for (const key in data) {
          if (key == id) {
            this.datosImg.push(data[key]);
          }
        }
      });
    });
  }
}
