import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update,
} from 'firebase/database';
import { environment } from 'src/environments/environment';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-detalle-lindo',
  templateUrl: './detalle-lindo.page.html',
  styleUrls: ['./detalle-lindo.page.scss'],
})
export class DetalleLindoPage implements OnInit {
  app = initializeApp(environment.firebase);
  db = getDatabase(this.app);
  datosImg: any[] = [];
  id?: any;
  like?: number;
  arr: any[] = [];
  arrOb: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: Auth
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');

      const refImg = ref(this.db, '/imagenes/lindo/');
      onValue(refImg, (snapshot) => {
        const data = snapshot.val();
        for (const key in data) {
          if (key == this.id) {
            this.datosImg = [];
            this.datosImg.push(data[key]);
          }
        }
      }),
        {
          onlyOnce: true,
        };
    });
  }

  irLindo() {
    this.router.navigate(['/home/lindo']);
  }

  darLike() {
    // this.arr = this.datosImg[0].user_like;

    if (this.datosImg[0].user_like == '') {
      const refImg = ref(this.db, `/imagenes/lindo/${this.id}`);
      const refImgLikes = ref(this.db, `/imagenes/lindo/${this.id}/user_like`);
      const postrefImgLikes = push(refImgLikes);
      this.like = Number(this.datosImg[0].likes);
      this.like += 1;
      update(refImg, {
        likes: this.like,
      });
      set(postrefImgLikes, {
        user: this.auth.currentUser?.uid,
      });
    }
    this.arrOb = Object.values(this.datosImg[0].user_like);
    //this.arrOb.includes(this.auth.currentUser?.uid);
    const contieneUsuarioNoDeseado = this.arrOb.some(
      (objeto) => objeto.user === this.auth.currentUser?.uid
    );
    if (contieneUsuarioNoDeseado == false) {
      const refImg = ref(this.db, `/imagenes/lindo/${this.id}`);
      const refImgLikes = ref(this.db, `/imagenes/lindo/${this.id}/user_like/`);
      const postrefImgLikes = push(refImgLikes);
      this.like = Number(this.datosImg[0].likes);
      this.like += 1;
      update(refImg, {
        likes: this.like,
        //user_like: this.auth.currentUser?.uid,
      });

      set(postrefImgLikes, {
        user: this.auth.currentUser?.uid,
      });
    }
  }
}
