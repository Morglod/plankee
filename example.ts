import { pee } from ".";

const [onLog, emitLog] = pee<[text: string]>();

const d = onLog((text) => console.log("log: " + text));

emitLog("hello world!");
d();
emitLog("hello world!");
