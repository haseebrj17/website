# How to use the library with React?

To use the [JS-Library](/how-to-use/js-library) with React, we convert the SVG
to a data URI and use it as the `src`.

```jsx
import { useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

function App() {
  const [avatar, setAvatar] = useState(null);

  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      size: 128,
      // ... other options
    }).toDataUriSync();
  }, []);

  return <img src={avatar} alt="Avatar" />;
}

export default App;
```
