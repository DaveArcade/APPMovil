<template>
<ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
            <ion-buttons slot="end">
                <ion-button @click="cerrarmodal">Cerrar</ion-button>
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
  name: 'Modal',
  props: {
        title: {
            type: String,
            default: 'Sinopsis'
        },
        content: {
         type: String,
         default: 'Aquí va el contenido'
     },
        close: { type: Function }
    },  
    methods:{
    cerrarmodal() {
            this.$emit('close', {
                foo: 'bar'
            })
            this.close()
            
        },
},
  components: {IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonPage },
});
</script>