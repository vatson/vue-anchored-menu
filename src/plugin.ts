import AnchoredMenu from './AnchoredMenu.vue';
import { PluginObject } from 'vue';

export default {
  install: (vue) => {
    vue.component('anchored-menu', AnchoredMenu);
  },
} as PluginObject<void>;
