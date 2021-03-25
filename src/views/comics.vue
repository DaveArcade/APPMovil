<template>
 <ion-page>
   
   <ion-header>
      <ion-toolbar>
        <ion-title>Comics</ion-title>
      </ion-toolbar>
    </ion-header>

  <ion-content :fullscreen="true">
    <ion-grid>
      <ion-row>

        <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824674631507116042/458992-10-portadas-mas-polemicas-comic.png"/>
        <ion-card-header>
          <ion-card-subtitle>Comic</ion-card-subtitle>
          <ion-card-title>Amazing Spider-man #544</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Accion, aventura, comedia, fantasia
          $100.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalSpider">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824674866645041192/JMECIYc.png"/>
        <ion-card-header>
          <ion-card-subtitle>Comic</ion-card-subtitle>
          <ion-card-title>Superman</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Accion, aventura, fantasia
          $300.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalSp">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824674987595923476/7017a1599607337468080a3280af95f7.png"/>
        <ion-card-header>
          <ion-card-subtitle>Comic</ion-card-subtitle>
          <ion-card-title>X-Men (1991) #1</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Accion, aventura, fantasia
          $80.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalXmen">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    
    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824675135159140403/las-portadas-marvel-avengers-1.png"/>
        <ion-card-header>
          <ion-card-subtitle>Comic</ion-card-subtitle>
          <ion-card-title>Avengers #118</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Accion, aventura, fantasia
          $50.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalAvengers">Leer Sinopsis</ion-button>
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

import Modal5 from '../components/modales/ModalSpider.vue';
import Modal6 from '../components/modales/ModalSp.vue';
import Modal7 from '../components/modales/ModalXmen.vue';
import Modal8 from '../components/modales/ModalAvengers.vue';

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

  data5() {
        return {
            Modal5: '',
            isOpen: false,
        }
    },

    data6() {
        return {
            Modal6: '',
            isOpen: false,
        }
    },

    data7() {
        return {
            Modal7: '',
            isOpen: false,
        }
    },
    data8() {
        return {
            Modal8: '',
            isOpen: false,
        }
    },

  methods: {
    async createModal5() {
      this.Modal5 = await modalController.create({
                component: Modal5,
                componentProps: {
                  title: 'Sinopsis',
                  content: 'Con la tía May ingresado en el hospital con un nombre falso, Peter tiene dificultades para lidiar con el hecho de que sin un seguro médico adecuado, May tendrá que ser puesto en el ala de bienestar del hospital. Combinado con el hecho de que ella no es probable que sobreviva, Peter está lleno de culpa por poner a su tía en esta condición de que él no le permitirá morir en algún pabellón de bienestar. Fine deduce la verdadera identidad de Peter, y simpatiza con la difícil situación de Peter porque Spider-Man una vez salvó a un tío suyo, y le da a Peter la oportunidad de encontrar el dinero.‎',
                  close5: () => this.closeModal5()
              },
                
            })
    },

    async openModalSpider() {
            await this.createModal5()
            this.isOpen = true
            this.Modal5.present()
        },
        closeModal5() {
            this.isOpen = false
            this.Modal5.dismiss().then(() => {
                this.Modal5 = null;
            });
        },

        async createModal6() {
      this.Modal6 = await modalController.create({
                component: Modal6,
                componentProps: {
                  title: 'Sinopsis',
                  content: 'El padre Leone está a punto de recibir una visita muy especial en su iglesia. Superman está desolado y necesita ayuda porque en el momento en que la Tierra sufrió su peor crisis hasta la fecha no pudo hacer nada por evitarlo, porque se encontraba a millón y medio de kilómetros de nuestro planeta. Lo que el Hombre de Acero no sospecha es que, ahora que ha regresado, la Desaparición no será más que el primero de los muchos problemas que le aguardan.',
                  close6: () => this.closeModal6()
              },
                
            })
    },

    async openModalSp() {
            await this.createModal6()
            this.isOpen = true
            this.Modal6.present()
        },
        closeModal6() {
            this.isOpen = false
            this.Modal6.dismiss().then(() => {
                this.Modal6 = null;
            });
        },

        async createModal7() {
      this.Modal7 = await modalController.create({
                component: Modal7,
                componentProps: {
                  title: 'Sinopsis',
                  content: '‎¡Son los X-Men de Xavier contra Magneto, el Maestro del Magnetismo! El enemigo más viejo de los X-Men ha vuelto y va a llevar a todos los X-Men tienen que derribarlo. Esta enorme cubierta de puerta de Jim Lee promete que la batalla va a ser épica‎‎',
                  close7: () => this.closeModal7()
              },
                
            })
    },

    async openModalXmen() {
            await this.createModal7()
            this.isOpen = true
            this.Modal7.present()
        },
        closeModal7() {
            this.isOpen = false
            this.Modal7.dismiss().then(() => {
                this.Modal7 = null;
            });
        },

        async createModal8() {
      this.Modal8 = await modalController.create({
                component: Modal8,
                componentProps: {
                  title: 'Sinopsis',
                  content: 'Con el Mal Ojo en su poder, Dormammu comienza a fusionar su Dimensión Oscura con el universo Tierra-616. Los Vengadores y Defensores entran en la Dimensión Oscura para encontrar y detener a Dormammu, mientras que los otros héroes de la Tierra se quedan para luchar contra los demonios que están empezando a vencer al mundo. Atacan a Dormammu, pero los Defensores son rápidamente dejados inconscientes por su poder. Atrapa a los Vengadores, pero es emboscado por Loki. Mientras se distrae, la Bruja Escarlata dispara a los dos con sus poderes hexadeceres. Esto hace que el Ojo Maligno succiona a Dormammu y enloqueciendo a Loki. Con los villanos derrotados, los demonios abandonan la Tierra y el universo se salva.‎',
                  close8: () => this.closeModal8()
              },
                
            })
    },

    async openModalAvengers() {
            await this.createModal8()
            this.isOpen = true
            this.Modal8.present()
        },
        closeModal8() {
            this.isOpen = false
            this.Modal8.dismiss().then(() => {
                this.Modal8 = null;
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