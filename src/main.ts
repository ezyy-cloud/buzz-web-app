import { createApp } from 'vue';
import './style.css';
import Router from './router';
import Vuetify from './theme';
import { apolloProvider } from './apollo';
import VueApexCharts from "vue3-apexcharts";
import VueApolloComponents from '@vue/apollo-components';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { createPinia } from 'pinia'
import App from './App.vue';

const pinia = createPinia()

createApp(App)
  .use(Router)
  .use(pinia)
  .use(Vuetify)
  .use(apolloProvider)
  .use(VueApolloComponents)
  .use(VueApexCharts)
  .use(VueGoogleMaps, {
    load: {
        key: import.meta.env.GOOGLE_MAPS_API_KEY,
        // language: 'de',
    },
})
  .mount('#app')
