<template>
 <ion-page>
   
   <ion-header>
      <ion-toolbar>
        <ion-title>Ciencia</ion-title>
      </ion-toolbar>
    </ion-header>

  <ion-content :fullscreen="true">
    <ion-grid>
      <ion-row>

        <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824680481898627162/portada-de-la-nueva-revista-ciencia_494d5cc6_1280x1752.png"/>
        <ion-card-header>
          <ion-card-subtitle>Ciencia</ion-card-subtitle>
          <ion-card-title>Así funciona el cerebro</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: ciencia, aprendizaje
          $350.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalOtro">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824680753308631061/portada1.png"/>
        <ion-card-header>
          <ion-card-subtitle>Ciencia</ion-card-subtitle>
          <ion-card-title>Parasitos</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: ciencia, aprendizaje
          $350.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalOtro">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824680986590969956/portada.png"/>
        <ion-card-header>
          <ion-card-subtitle>Ciencia</ion-card-subtitle>
          <ion-card-title>Los ojos de méxico en el espacio</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: ciencia, aprendizaje
          $350.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalOtro">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    
    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824681086927241306/portada-2-1-422x550.png"/>
        <ion-card-header>
          <ion-card-subtitle>Ciencia</ion-card-subtitle>
          <ion-card-title>COVID-19</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: ciencia, aprendizaje
          $350.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalOtro">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

      </ion-row>
    </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonButton, 
IonContent, 
IonPage, 
modalController, 
IonGrid, 
IonRow, 
IonCol, 
IonCard, 
IonCardContent, 
IonCardSubtitle, 
IonCardTitle, 
IonCardHeader, 
IonHeader, 
IonTitle, 
IonToolbar } from '@ionic/vue';

import Modal9 from '../../components/modales/otro.vue';

export default {
  components: { IonButton, 
  IonContent, 
  IonPage, 
  IonGrid, 
  IonRow, IonCol, 
  IonCard, 
  IonCardContent, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCardHeader, 
  IonHeader, 
  IonTitle, 
  IonToolbar },

  data9() {
        return {
            Modal9: '',
            isOpen: false,
        }
    },

  methods: {
    async createModal9() {
      this.Modal9 = await modalController.create({
                component: Modal9,
                componentProps: {
                  title: 'Sinopsis',
                  content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur fugiat odio sint fuga numquam ad ex explicabo nobis adipisci mollitia nisi ut modi quidem delectus cupiditate sapiente laudantium, reprehenderit ipsum!‎',
                  close9: () => this.closeModal9()
              },
                
            })
    },

    async openModalOtro() {
            await this.createModal9()
            this.isOpen = true
            this.Modal9.present()
        },
        closeModal9() {
            this.isOpen = false
            this.Modal9.dismiss().then(() => {
                this.Modal9 = null;
            });
        },
},
}
</script>

<style>
img{
  height: auto;
}
</style>