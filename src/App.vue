<template>
  <ion-app>
    <ion-router-outlet />
    <Pestanas />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Pestanas from './components/Pestanas.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Pestanas
  }
});
</script>