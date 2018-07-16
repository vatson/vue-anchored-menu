// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../vue
//   ../vue-router

declare module 'vue-anchored-menu' {
    export { default as AnchoredMenuPlugin } from 'vue-anchored-menu/src/plugin';
    export { default as AnchoredMenu } from 'vue-anchored-menu/src/AnchoredMenu.vue';
}

declare module 'vue-anchored-menu/src/plugin' {
    import { PluginObject } from 'vue';
    const _default: PluginObject<void>;
    export default _default;
}

declare module 'vue-anchored-menu/src/AnchoredMenu.vue' {
    import vue from 'vue';
    import { RouteConfig, RawLocation } from 'vue-router';
    export default class  extends vue {
        routes: RouteConfig[];
        maxLevel: number;
        level: number;
        parentPath: string;
        goToAnchor(path: RawLocation, anchor: string): void;
    }
}

