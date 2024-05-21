# plank event emitter

Smallest was [nanoevents](https://github.com/ai/nanoevents) but it is 219 minified size and 138 brotlied **(not 107!!!)**

So why we should waste so much memory in JS?

Real original size 93 bytes  
Real broitled size **81 bytes**

Usage:

```
npm i plankee
```

```ts
import { pee } from "plankee";

const [onLog, emitLog] = pee<[text: string]>();

const removeListener = onLog((text) => console.log("log: " + text));

emitLog("hello world!");

removeListener();
```

## API

```ts
[subscribe, emit] = pee<[ARGUMENTS]>();

// subscribe returns disposer
```
