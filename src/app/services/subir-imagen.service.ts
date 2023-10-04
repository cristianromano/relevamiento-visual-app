import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, set } from 'firebase/database';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubirImagenService {
  app = initializeApp(environment.firebase);
  db = getDatabase(this.app);

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
    // Establecer los datos en el nodo "imagenes"
    debugger;
    set(postImg, {
      id_usuario: userId,
      imagen: imageId,
      nombre_img: imageUrl,
      likes: likes,
    });
  }
}
