import { Injectable } from '@angular/core';
import {
  Storage,
  uploadBytes,
  ref,
  getDownloadURL,
} from '@angular/fire/storage';
import { initializeApp, getApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SubirStorageService {
  async subirArchivo(file: File, carpeta: string): Promise<string> {
    const imagenRef = ref(this.storage, `${carpeta}/${file.name}`);
    await uploadBytes(imagenRef, file);

    const imageUrl = getDownloadURL(imagenRef);

    return imageUrl;
  }

  constructor(private storage: Storage) {}
}
