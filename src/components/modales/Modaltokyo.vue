<template>
<ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
            <ion-buttons slot="end">
                <ion-button @click="cerrarmodal3">Cerrar</ion-button>
            </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    {{ content }}
  </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal3',
  props: {
        title: {
            type: String,
            default: 'Sinopsis'
        },
        content: {
         type: String,
         default: 'Aquí va el contenido'
     },
        close3: { type: Function }
    },  
    methods:{
    cerrarmodal3() {
            this.$emit('close3', {
                foo: 'bar'
            })
            this.close3()
            
        },
},
  components: {IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonPage },
});
</script>