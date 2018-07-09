import 'vue-router';

declare module 'vue-router/types/router' {
  export interface RouteConfig {
    title?: string,
    anchors?: {[propName: string]: string}
  }
}