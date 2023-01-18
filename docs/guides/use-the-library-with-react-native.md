# How to use the library with React Native?

To use DiceBear with [React Native](https://reactnative.dev/) you need a
[TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) /
[TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDescoder)
polyfill and an SVG library to render the avatars. In our example we use the
packages [fast-text-encoding](https://www.npmjs.com/package/fast-text-encoding)
and [react-native-svg](https://www.npmjs.com/package/react-native-svg).

First install the required packages:

```
npm install fast-text-encoding react-native-svg
```

A working example looks like this:

```jsx
import 'fast-text-encoding';
import { View } from 'react-native';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { SvgXml } from 'react-native-svg';

export default function App() {
  const avatar = createAvatar(lorelei, {
    seed: 'Kitty',
    // ... other options
  }).toString();

  return (
    <View>
      <SvgXml xml={avatar} />
    </View>
  );
}
```

::: tip

Make sure you load the polyfill before DiceBear, as in the example. You only
need to do this once in your app.

:::
