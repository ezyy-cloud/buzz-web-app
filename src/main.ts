import { createApp } from 'vue';
import './style.css';
import Router from './router';
import Vuetify from './theme';
import ApolloProvider from './apollo';
import App from './App.vue';

createApp(App)
  .use(Router)
  .use(Vuetify)
  .use(ApolloProvider)
  .mount('#app');
