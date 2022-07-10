<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import { ThemeOptions } from '@shared/types';

const { theme } = useData<ThemeOptions>();
const props = defineProps<{
  styleName: string;
}>();

const style = computed(() => {
  return theme.value.avatarStyles[props.styleName];
});
</script>

<template>
  <p>
    This implementation is a remix of
    <a :href="style.meta.source" target="_blank" ref="noopener noreferrer">{{
      style.meta.title
    }}</a>
    by
    <a :href="style.meta.homepage" target="_blank" ref="noopener noreferrer">{{
      style.meta.creator
    }}</a
    >. Licensed under
    <a
      :href="style.meta.license?.url"
      target="_blank"
      ref="noopener noreferrer"
      >{{ style.meta.license?.name.replace(/\.$/, '') }}</a
    >.
  </p>

  <div class="info custom-block" :v-if="style.meta.license?.name !== 'MIT'">
    <p class="custom-block-title">LICENSE</p>
    <p>
      While our code is MIT licensed, the design is licensed under
      <a
        :href="style.meta.license?.url"
        target="_blank"
        ref="noopener noreferrer"
        >{{ style.meta.license?.name.replace(/\.$/, '') }}</a
      >. See <a href="#details">details</a> for more information.
    </p>
  </div>
</template>
