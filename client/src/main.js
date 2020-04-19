import Vue from 'vue'
import {
  ApolloClient
} from 'apollo-client';
import {
  InMemoryCache
} from 'apollo-cache-inmemory';
import {
  onError
} from 'apollo-link-error';
import {
  ApolloLink
} from 'apollo-link';
import {
  HttpLink
} from 'apollo-link-http';
import {
  enableExperimentalFragmentVariables
} from 'graphql-tag';
import VueApollo from 'vue-apollo';

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')