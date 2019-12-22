const js = import("./node_modules/@montao/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});