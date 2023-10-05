import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { User } from 'firebase/auth';
import { getDatabase, onValue, push, query, ref, set } from 'firebase/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubirImagenService {
  app = initializeApp(environment.firebase);
  db = getDatabase(this.app);
  private dataSubject = new BehaviorSubject<any[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor() {}

  writeImageData(
    userId: string,
    imageId: string,
    imageUrl: string,
    likes: string
  ) {
    // Crear una referencia al nodo "imagenes" utilizando el userId e imageId como clave
    const imagenRef = ref(this.db, `imagenes/lindo/`);
    const postImg = push(imagenRef);
    set(postImg, {
      id_usuario: userId,
      imagen: imageId,
      nombre_img: imageUrl,
      likes: likes,
    });
  }

  mostrarImg() {
    onValue(ref(this.db, '/imagenes/lindo/'), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // const dataArr = Object.values(data);
        this.dataSubject.next(data);
      } else {
        this.dataSubject.next([]);
      }
    });
  }

  writeImageDataFeo(
    userId: string,
    imageId: string,
    imageUrl: string,
    likes: string
  ) {
    // Crear una referencia al nodo "imagenes" utilizando el userId e imageId como clave
    const imagenRef = ref(this.db, `imagenes/feo/`);
    const postImg = push(imagenRef);
    set(postImg, {
      id_usuario: userId,
      imagen: imageId,
      nombre_img: imageUrl,
      likes: likes,
    });
  }

  mostrarImgFeo() {
    onValue(ref(this.db, '/imagenes/feo/'), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // const dataArr = Object.values(data);
        this.dataSubject.next(data);
      } else {
        this.dataSubject.next([]);
      }
    });
  }
}
