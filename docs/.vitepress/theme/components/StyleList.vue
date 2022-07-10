<script setup lang="ts">
import { useData } from 'vitepress';
import { ThemeOptions } from '@shared/types';
import StyleListRow from './StyleListRow.vue';

const { theme } = useData<ThemeOptions>();
const styles = theme.value.avatarStyles;
</script>

<template>
  <div class="grid">
    <StyleListRow
      v-for="(style, styleName) of styles"
      :key="styleName"
      :style="style"
      :style-name="styleName"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
}
</style>
