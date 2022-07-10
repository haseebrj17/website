# How to use the library with Vue?

To use the [JS-Library](/how-to-use/js-library) with Vue, we need to convert the
SVG to a data URI and use it as the `src`. Because the `toDataUri` method is
asynchronous, we need to use the `onMounted` hook to wait for the avatar to be
generated. Then we can use the `ref` object to update the state and trigger a
re-render.

```vue
<script setup>
import { onMounted, ref } from 'vue';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

const avatar = ref(null);

onMounted(async () => {
  const dataUri = await createAvatar(lorelei, {
    size: 128,
    // ... other options
  }).toDataUri();

  avatar.value = dataUri;
});
</script>

<template>
  <img v-if="avatar" :src="avatar" alt="Avatar" />
</template>
```
