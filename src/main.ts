import { createApp } from 'vue';
import './style.css';
import Router from './router';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import Theme from './theme';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'Theme',
    themes: {
      Theme,
    }
  },
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App)
  .use(Router)
  .use(vuetify)
  .mount('#app');
