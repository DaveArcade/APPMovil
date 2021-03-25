<template>
 <ion-page>
   
   <ion-header>
      <ion-toolbar>
        <ion-title>Tecnologia</ion-title>
      </ion-toolbar>
    </ion-header>

  <ion-content :fullscreen="true">
    <ion-grid>
      <ion-row>

        <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824690029234225182/portada-tecnologia-3ed.png"/>
        <ion-card-header>
          <ion-card-subtitle>categoria</ion-card-subtitle>
          <ion-card-title>Tecnología para andar por casa</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Tecnología, aprendizaje
          $350.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalOtro">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824690562564882483/imagen.png"/>
        <ion-card-header>
          <ion-card-subtitle>categoria</ion-card-subtitle>
          <ion-card-title>Tecnología, innovación e investigación en los procesos de enseñanza-aprendizaje</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Tecnología, aprendizaje
          $350.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalOtro">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824690768072802364/libro-de-julio-cavero-1-638.png"/>
        <ion-card-header>
          <ion-card-subtitle>categoria</ion-card-subtitle>
          <ion-card-title>Nuevas tecnologías aplicadas a la educación</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Tecnología, aprendizaje
          $350.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalOtro">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    
    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824690946553020487/Portada_libro.png"/>
        <ion-card-header>
          <ion-card-subtitle>categoria</ion-card-subtitle>
          <ion-card-title>Tecnología del automóvil</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Tecnología, aprendizaje
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