# How to use the library with React?

There are several ways to use the [JS-Library](/how-to-use/js-library) with
React. We will show you the most common ways.

## Method 1

The first method is to convert the SVG to a data URI and use it as the `src`.
This method does not require any additional dependencies. Because the
`toDataUri` method is asynchronous, we need to use the `useEffect` hook to wait
for the avatar to be generated. Then we can use the `useState` hook to update
the state and trigger a re-render.

```jsx
import { useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

function App() {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    let active = true;

    (async () => {
      const avatar = await createAvatar(lorelei, {
        size: 128,
        // ... other options
      }).toDataUri();

      if (active) {
        setAvatar(avatar);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return avatar ? <img src={avatar} alt="Avatar" /> : null;
}

export default App;
```

## Method 2

The second method is technically the same as the first method, but we use the
`useAsync` hook from the `react-use` package to simplify the code.

First we need to install the
[react-use](https://www.npmjs.com/package/react-use) package:

```
npm install react-use
```

Now the code can be simplified, like this:

```jsx
import { useAsync } from 'react-use';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

function App() {
  const avatar = useAsync(() => {
    return createAvatar(lorelei, {
      size: 128,
      // ... other options
    }).toDataUri();
  }, []);

  return avatar.loading ? null : <img src={avatar.value} alt="Avatar" />;
}

export default App;
```

## Method 3

The third method is to insert the SVG directly into the DOM. While we try very
hard to keep DiceBear safe, this could lead to security issues. We therefore
recommend using one of the first two methods.

```jsx
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

function App() {
  const avatar = createAvatar(lorelei, {
    size: 128,
    // ... other options
  }).toString();

  return <div dangerouslySetInnerHTML={{ __html: avatar }} />;
}

export default App;
```
