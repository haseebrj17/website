<script setup lang="ts">
import { withBase } from 'vitepress';
</script>

<template>
  <span class="headline">Sponsor</span>
  <div class="container">
    <a href="https://bunny.net/" target="_blank" rel="noopener">
      <img :src="withBase('/sponsors/bunny-dark.svg')" title="bunny.net" />
    </a>
  </div>
</template>

<style>
:root {
  --sponsors-background-color-hover: #d7d7d8;
}

.dark {
  --sponsors-background-color-hover: #ffffff;
}
</style>

<style scoped lang="scss">
.headline {
  color: var(--vp-c-text-3);
  display: block;
  margin: 3em 0 1em;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  a {
    padding: 12px;
    background-color: var(--vp-c-bg-soft);
    display: flex;
    justify-content: space-around;
    border-radius: 2px;
    transition: background-color 0.2s ease;
    img {
      filter: grayscale(1) invert(1);
      height: 48px;
    }
    &:hover {
      background-color: var(--sponsors-background-color-hover);
      img {
        filter: none;
      }
    }
  }
}
</style>
