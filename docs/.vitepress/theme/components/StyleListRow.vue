<script setup lang="ts">
import { useRouter } from 'vitepress';
import { AvatarStyle } from '@shared/types';
import { paramCase, capitalCase } from 'change-case';
import Avatar from '@shared/components/Avatar.vue';

const router = useRouter();

const props = defineProps<{
  styleName: string;
  style: AvatarStyle;
}>();

function onClick() {
  router.go(`/styles/${paramCase(props.styleName)}`);
}
</script>

<template>
  <v-card :elevation="0">
    <template #prepend>
      <Avatar
        :style-name="styleName"
        :style-options="{ seed: 'JD' }"
        :size="64"
        mode="http-api"
      />
    </template>
    <template #title>{{ capitalCase(styleName) }}</template>
    <template #subtitle>by {{ style.meta.creator }}</template>
    <template #actions>
      <v-btn @click="onClick" color="primary">Documentation</v-btn>
    </template>
  </v-card>
</template>

<style lang="scss" scoped>
.style-list-row {
  position: relative;
  cursor: pointer;

  &-button {
    position: static;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
