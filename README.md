# use-detect-overflow

> React Hook for detect overflow

[![NPM](https://img.shields.io/npm/v/use-detect-overflow.svg)](https://www.npmjs.com/package/use-detect-overflow) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Live Example](https://kaichii.github.io/use-detect-overflow/)

## Install

```bash
npm install --save use-detect-overflow
// OR
yarn add use-detect-overflow
// OR
pnpm add use-detect-overflow
```

## Usage

```tsx
import * as React from 'react';

import { useDetectOverflow } from 'use-detect-overflow';

const Example = () => {
  const [ref, { overflowX, overflowY }] = useDetectOverflow();
  return <div ref={ref}>...</div>;
};
```

## License

MIT © [kaichii](https://github.com/kaichii)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
