<template>
  <div>
    <template v-for="(route, k) in routes">
        <router-link 
          :to="parentPath + route.path" 
          :key="k"
          v-if="route.title"
        >
          {{ route.title }}
        </router-link>
        
        <a
          v-if="!route.title || (level + 1) <= maxLevel"
          v-for="(anchor, title) of route.anchors"
          :key="title"
          :href="'#' + anchor"
          @click="goToAnchor(parentPath + route.path + '#' + anchor, anchor)"
        >
          {{title}}
        </a>

        <anchored-menu 
          v-if="level !== maxLevel && hasChildren(route)" 
          :parent-path="parentPath + route.path + '/'" 
          :routes="route.children" 
          :level="level + 1"
          :maxLevel="maxLevel"
          :key="k + String(level)"
        ></anchored-menu>
    </template>
  </div>
</template>

<script lang="ts">
/// <reference path="./../types/vue-router.d.ts" />

import { Component, Prop } from 'vue-property-decorator';
import vue from 'vue';

import { RouteConfig, RawLocation } from 'vue-router';
@Component({
  name: 'anchored-menu',
})
export default class extends vue {
  @Prop({ required: true })
  routes!: RouteConfig[];

  @Prop({ type: Number, default: 2, required: false })
  maxLevel!: number;

  @Prop({default: 0})
  level!: number;

  @Prop({ type: String, default: '' })
  parentPath!: string;

  public goToAnchor(path: RawLocation, anchor: string) {
    this.$router.push(path, () => location.href = '#' + anchor );
  }

  private hasChildren(route: RouteConfig) {
    return route.children && route.children.length;
  }

  private links(routes: RouteConfig[] = []): RouteConfig[] {
    return routes.filter((route) => route.title);
  }
}
</script>
