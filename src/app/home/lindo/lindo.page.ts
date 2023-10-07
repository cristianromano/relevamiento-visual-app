import { Component, OnInit } from '@angular/core';
import { SubirImagenService } from 'src/app/services/subir-imagen.service';
import { SubirStorageService } from 'src/app/services/subir-storage.service';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lindo',
  templateUrl: './lindo.page.html',
  styleUrls: ['./lindo.page.scss'],
})
export class LindoPage implements OnInit {
  selectedFile?: File;
  imagen?: string;
  user = this.auth.currentUser;
  recentPosts: any[] = [];
  orderArr: any[] = [];
  constructor(
    private subirImg: SubirImagenService,
    private storage: SubirStorageService,
    private auth: Auth,
    private router: Router
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async uploadFile() {
    if (this.selectedFile) {
      this.imagen = await this.storage.subirArchivo(this.selectedFile, 'lindo');
      this.subirImg.writeImageData(
        `${this.user?.email}`,
        this.imagen,
        this.selectedFile.name,
        '0'
      );
    }
  }

  ngOnInit() {
    this.subirImg.mostrarImg();
    this.subirImg.data$.subscribe((data) => {
      this.recentPosts = Object.entries(data).map(([key, value]) => {
        return { key, ...value };
      });
      this.sortByLikes();
    });

    //this.recentPosts.push(this.subirImg.mostrarImg(String(this.user)));
  }

  sortByLikes() {
    this.recentPosts.sort((a, b) => b.likes - a.likes);
  }

  verDetallesImagen(id: string) {
    this.router.navigate(['/detalle', id]);
  }

  irHome() {
    this.router.navigate(['/home']);
  }
}
