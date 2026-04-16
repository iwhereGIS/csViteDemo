<script setup lang="ts">
import { ref, computed } from 'vue'

import iconfont from '../../assets/iconfont/iconfont.json'

import { CsIcon } from "@iw/cesium-ui";

const icons = computed(() => {
  const results = []
  for (const glyph of iconfont.glyphs) {
    console.log(glyph.name)
    results.push(glyph.font_class)
  }
  return results
})

console.log("icons",icons)

const count = ref(31)
</script>

<template>
  <section id="center">
    <div class="hero">
      <div v-for="icon in icons" :key="icon" class="icon">
        <cs-icon :icon-class="icon" />
        <div class="icon-name">{{icon}}</div>
      </div>
    </div>
    <button class="counter" @click="count++">Count is {{ count }}</button>
  </section>
</template>

<style>
.hero {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
}

.hero .icon{
  margin: 5px;
  width: 64px;
  height: 64px;
  text-align: center;
}
.hero .icon .icon-name{
  font-size: 14px;
  text-align: center;
}
</style>
