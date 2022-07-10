<script setup lang="ts">
import { useRoute } from 'vitepress';
import { computed, ref, watch } from 'vue';
import PlaygroundSidebar from '@playground/components/Sidebar.vue';

const route = useRoute();

const isPlayground = computed(() => route.path.startsWith('/playground'));

const marker = ref<HTMLElement>();

watch(
  () => isPlayground.value,
  (newValue: boolean, oldValue: boolean) => {
    if (newValue !== oldValue) {
      marker.value?.parentElement?.parentElement?.scrollTo(0, 0);
    }
  }
);
</script>

<template>
  <div ref="marker"></div>
  <div v-if="isPlayground" class="sidebar-playground">
    <PlaygroundSidebar />
  </div>
</template>

<style scoped lang="scss">
.sidebar-playground {
  + :deep(*) {
    display: none;
  }
}
</style>
