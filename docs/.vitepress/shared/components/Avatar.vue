<script setup lang="ts">
import { createAvatar, StyleOptions } from '@dicebear/core';
import { getAvatarApiUrl, loadAvatarStyle } from '@shared/utils/avatar';
import { computedAsync } from '@vueuse/core';
import { paramCase } from 'change-case';

const props = withDefaults(
  defineProps<{
    size: number;
    styleName: string;
    styleOptions: StyleOptions<any>;
    mode?: 'library' | 'http-api';
  }>(),
  {
    mode: 'library',
  }
);

const svg = computedAsync(() => {
  const styleName = props.styleName;
  const styleOptions = props.styleOptions;

  switch (props.mode) {
    case 'library':
      return loadAvatarStyle(styleName).then((avatarStyle) =>
        createAvatar(avatarStyle, styleOptions).toDataUri()
      );
    case 'http-api':
      return getAvatarApiUrl(styleName, styleOptions);
  }
});
</script>

<template>
  <div class="avatar">
    <img :src="svg" v-if="svg" alt="avatar preview" loading="lazy" />
  </div>
</template>

<style scoped>
.avatar {
  width: calc(v-bind(size) * 1px);
  height: calc(v-bind(size) * 1px);
  border-radius: 3px;
  background: repeating-conic-gradient(
      var(--vp-c-bg-soft) 0% 25%,
      var(--vp-c-bg-mute) 0% 50%
    )
    50% / 12px 12px;
  line-height: 0;
  overflow: hidden;
}

.avatar img {
  height: 100%;
  width: 100%;
}
</style>
