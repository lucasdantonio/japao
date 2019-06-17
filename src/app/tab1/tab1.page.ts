import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular'
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController, private router: Router, private alertController: AlertController) {}

  navigateToLogin(): void {
    this.router.navigate(['login']);
  }

  async abrirModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nome: 'Baguete',
        preco: 'R$ 2,50',
        imagem: '../../assets/baguete.png'
      }
    });
    await modal.present();
  }

  async abrirModal2(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nome: 'Pão Francês',
        preco: 'R$ 0,25',
        imagem: '../../assets/pao-frances.png'
      }
    });
    await modal.present();
  }
}
