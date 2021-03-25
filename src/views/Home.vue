<template>
 <ion-page>
   
   <ion-header>
      <ion-toolbar>
        <ion-title>Inicio</ion-title>
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

    <ion-col>
      <ion-card>
        <img src="https://cdn.discordapp.com/attachments/421437831802650625/824690029234225182/portada-tecnologia-3ed.png"/>
        <ion-card-header>
          <ion-card-subtitle>Tecnología</ion-card-subtitle>
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
          <ion-card-subtitle>Tecnologia</ion-card-subtitle>
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
          <ion-card-subtitle>Tecnologia</ion-card-subtitle>
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
          <ion-card-subtitle>Tecnologia</ion-card-subtitle>
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

import Modal from '../components/modales/Modalkimetsu.vue';
import Modal2 from '../components/modales/Modalnaruto.vue';
import Modal3 from '../components/modales/Modaltokyo.vue';
import Modal4 from '../components/modales/Modaldeath.vue';
import Modal5 from '../components/modales/ModalSpider.vue';
import Modal6 from '../components/modales/ModalSp.vue';
import Modal7 from '../components/modales/ModalXmen.vue';
import Modal8 from '../components/modales/ModalAvengers.vue';
import Modal9 from '../components/modales/otro.vue';

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

    data9() {
        return {
            Modal9: '',
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
