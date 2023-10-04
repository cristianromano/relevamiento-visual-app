import { Component, OnInit } from '@angular/core';
import { SubirImagenService } from 'src/app/services/subir-imagen.service';
import { SubirStorageService } from 'src/app/services/subir-storage.service';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-lindo',
  templateUrl: './lindo.page.html',
  styleUrls: ['./lindo.page.scss'],
})
export class LindoPage implements OnInit {
  selectedFile?: File;
  imagen?: string;
  user = this.auth.currentUser;
  constructor(
    private subirImg: SubirImagenService,
    private storage: SubirStorageService,
    private auth: Auth
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    debugger;
  }

  async uploadFile() {
    if (this.selectedFile) {
      this.imagen = await this.storage.subirArchivo(this.selectedFile, 'lindo');
      this.subirImg.writeImageData(
        `${this.user?.uid}`,
        this.imagen,
        this.selectedFile.name,
        '16'
      );
    }
  }

  ngOnInit() {}
}
