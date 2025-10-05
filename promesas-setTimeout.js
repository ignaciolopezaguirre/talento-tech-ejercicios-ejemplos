console.log("A");

setTimeout(() => console.log("B (timeout)"),0);

Promise.resolve().then(() => {
  console.log("C (promesas)");
});

console.log("D");
