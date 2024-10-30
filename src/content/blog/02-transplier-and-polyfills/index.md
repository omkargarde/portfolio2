---
title: "Transpiler and Polyfills"
description: "Explaining what is Transpiler and Polyfill in JavaScript "
date: "oct 30 2024"
---
## What is a Transpiler?

A transpiler is compiler-like software that transforms modern JavaScript code into older JavaScript code so that it can
work on older browsers.

For example:

```javascript
const something = value ?? false;
```

will be transformed into:

```javascript
const something = value !== undefined && value !== null ? value : false;
```

Build tools like Vite can run transpiler like Babel automatically on file changes, and the transformed code can be
served to the browser.

## What is a Polyfill?

polyfills is a fancy way of saying that said function does not exist, and we have to write it ourselves.

A polyfill is a script that adds new features to JavaScript and can also modify existing language features.

Polyfills are useful when:

- Backward compatibility with older browsers is required
- A language feature that is not yet well-supported is used