# exact-proportion

Calculates a proportion. [Read more on wikipedia](<https://en.wikipedia.org/wiki/Proportion_(mathematics)>).

# Features

-   works in nodejs
-   works in browser
-   ts support
-   super tiny
-   no deps

# Installation

```bash
npm i exact-proportion
```

# Usage

```ts
import { proportion } from 'exact-proportion';

proportion.a(100).ratioB(15).likeC(1000).ratioX(); // 150
```

# Replacing math functions

Standard operators `a * b` and `a / b` are used by default.
You could replace it by own functions.

```ts
import { proportion } from 'exact-proportion';
import exactMath from 'exact-math';

proportion.div = exactMath.div;
proportion.mul = exactMath.mul;
```

# License

MIT
