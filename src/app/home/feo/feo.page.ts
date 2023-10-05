import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SubirImagenService } from 'src/app/services/subir-imagen.service';
import { SubirStorageService } from 'src/app/services/subir-storage.service';

@Component({
  selector: 'app-feo',
  templateUrl: './feo.page.html',
  styleUrls: ['./feo.page.scss'],
})
export class FeoPage implements OnInit {
  selectedFile?: File;
  imagen?: string;
  user = this.auth.currentUser;
  recentPosts: any[] = [];
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
      this.imagen = await this.storage.subirArchivo(this.selectedFile, 'feo');
      this.subirImg.writeImageDataFeo(
        `${this.user?.uid}`,
        this.imagen,
        this.selectedFile.name,
        '0'
      );
    }
  }

  ngOnInit() {
    this.subirImg.mostrarImgFeo();
    this.subirImg.data$.subscribe((data) => {
      this.recentPosts = Object.entries(data).map(([key, value]) => {
        return { key, ...value };
      });
    });
    //this.recentPosts.push(this.subirImg.mostrarImg(String(this.user)));
  }

  verDetallesImagen(id: string) {
    this.router.navigate(['/detalle-feo', id]);
  }

  irHome() {
    this.router.navigate(['/home']);
  }
}
