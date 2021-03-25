<template>
<ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">

      <router-link to="/Home">
        <ion-button shape="round" color="medium" size="small">
        <ion-icon :icon="home" />
        </ion-button>
      </router-link>

      <router-link to="/tab2">
      <ion-button shape="round" color="medium" size="small">
        <ion-icon :icon="grid" />
      </ion-button>
      </router-link>
          
      <router-link to="/tab3">
      <ion-button shape="round" color="medium" size="small">
        <ion-icon :icon="helpCircle" />
      </ion-button>
      </router-link>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabs,
  IonButton,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { grid, helpCircle, home } from "ionicons/icons";

export default {
  name: "Pestanas",
  components: {  IonButton, IonTabs, IonTabBar, IonIcon, IonPage },
  setup() {
    return {
      grid,
      helpCircle,
      home
    };
  },
};
</script>