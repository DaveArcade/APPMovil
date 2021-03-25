<template>
 <ion-page>
   
   <ion-header>
      <ion-toolbar>
        <ion-title>Anime</ion-title>
      </ion-toolbar>
    </ion-header>

  <ion-content :fullscreen="true">
    <ion-grid>
      <ion-row>

        <ion-col>
      <ion-card>
        <img src="https://media.discordapp.net/attachments/749118010576601138/823314768126410782/340.png"/>
        <ion-card-header>
          <ion-card-subtitle>Manga</ion-card-subtitle>
          <ion-card-title>Kimetsu no yaiba</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Ficción de aventuras, Fantasía oscura, Artes marciales
          $120.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalkimetsu">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    <ion-col>
      <ion-card>
        <img src="https://media.discordapp.net/attachments/749118010576601138/823314849428799508/ee49eed247bca0c2d7fce016d69d45ff.png"/>
        <ion-card-header>
          <ion-card-subtitle>Manga</ion-card-subtitle>
          <ion-card-title>Naruto</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Accion, aventura, comedia, fantasia
          $99.00
        </ion-card-content>
        <ion-button expand="block" @click="openModalnaruto">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/299024640930742273/823776488049737728/cea348d34271687db6d4cbf3085c84c4cd296a41_00.png"/>
        <ion-card-header>
          <ion-card-subtitle>Manga</ion-card-subtitle>
          <ion-card-title>Tokyo Ghoul</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Fantasía oscura, Horror, Suspenso
          $100.00
        </ion-card-content>
        <ion-button expand="block" @click="openModaltokyo">Leer Sinopsis</ion-button>
      </ion-card>
    </ion-col>

    
    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/299024640930742273/823777437351411723/1.png"/>
        <ion-card-header>
          <ion-card-subtitle>Manga</ion-card-subtitle>
          <ion-card-title>Death Note</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Géneros: Misterio, Thriller psicológico, Suspenso
          $100.00
        </ion-card-content>
        <ion-button expand="block" @click="openModaldeath">Leer Sinopsis</ion-button>
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

import Modal from '../components/modales/Modalkimetsu.vue';
import Modal2 from '../components/modales/Modalnaruto.vue';
import Modal3 from '../components/modales/Modaltokyo.vue';
import Modal4 from '../components/modales/Modaldeath.vue';

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

  data() {
        return {
            Modal: '',
            isOpen: false,
        }
    },

  data2() {
        return {
            Modal2: '',
            isOpen: false,
        }
    },

  data3() {
        return {
            Modal3: '',
            isOpen: false,
        }
    },

    data4() {
        return {
            Modal4: '',
            isOpen: false,
        }
    },

  methods: {
    async createModal() {
      this.Modal = await modalController.create({
                component: Modal,
                componentProps: {
                  title: 'Sinopsis',
                  content: 'Kimetsu no Yaiba, también conocido por su nombre en inglés Demon Slayer y como Guardianes De La Noche en España, es un manga escrito e ilustrado por Koyoharu Gotōge que comenzó a serializarse el 15 de febrero de 2016 en la revista semanal Shūkan Shōnen Jump de la editorial Shūeisha',
                  close: () => this.closeModal()
              },
                
            })
    },

    async openModalkimetsu() {
            await this.createModal()
            this.isOpen = true
            this.Modal.present()
        },
        closeModal() {
            this.isOpen = false
            this.Modal.dismiss().then(() => {
                this.Modal = null;
            });
        },


    async createModal2() {
      this.Modal2 = await modalController.create({
                component: Modal2,
                componentProps: {
                  title: 'Sinopsis',
                  content: 'Naruto, romanizada como NARUTO, es una serie de manga escrita e ilustrada por Masashi Kishimoto. La obra narra la historia de un ninja adolescente llamado Naruto Uzumaki, quien aspira a convertirse en Hokage, líder de su aldea, con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.',
                  close2: () => this.closeModal2()
              },
                
            })
    },

    async openModalnaruto() {
            await this.createModal2()
            this.isOpen = true
            this.Modal2.present()
        },
        closeModal2() {
            this.isOpen = false
            this.Modal2.dismiss().then(() => {
                this.Modal2 = null;
            });
        },

    async createModal3() {
      this.Modal3 = await modalController.create({
                component: Modal3,
                componentProps: {
                  title: 'Sinopsis',
                  content: 'Extraños sucesos ocurren en Tokio; se piensa que las criaturas responsables son los llamados “ghouls”. En tanto, la vida de Ken Kaneki, un joven universitario muy inteligente y tímido, cambiará radicalmente cuando conozca a una extraña chica, Rize. Una de las series más aclamadas en los últimos años llega a México de la mano de Panini: ¡Tokyo Ghoul! ¡No te pierdas la oportunidad de conocer esta increíble historia de Sui Ishida!',
                  close3: () => this.closeModal3()
              },
                
            })
    },

    async openModaltokyo() {
            await this.createModal3()
            this.isOpen = true
            this.Modal3.present()
        },
        closeModal3() {
            this.isOpen = false
            this.Modal3.dismiss().then(() => {
                this.Modal3 = null;
            });
        },

        async createModal4() {
      this.Modal4 = await modalController.create({
                component: Modal4,
                componentProps: {
                  title: 'Sinopsis',
                  content: 'Death Note es una serie de manga escrita por Tsugumi Ōba e ilustrada por Takeshi Obata, y cuya adaptación a serie de anime fue dirigida por Tetsurō Araki. Cuenta, además, con varias películas y videojuegos. La historia se centra en Light Yagami, un estudiante de secundaria.',
                  close4: () => this.closeModal4()
              },
                
            })
    },

    async openModaldeath() {
            await this.createModal4()
            this.isOpen = true
            this.Modal4.present()
        },
        closeModal4() {
            this.isOpen = false
            this.Modal4.dismiss().then(() => {
                this.Modal4 = null;
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