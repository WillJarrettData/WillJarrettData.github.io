import nodeResolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import terser from '@rollup/plugin-terser';
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    format: "iife",
    name: "template",
    file: "template.js",
    sourcemap: true,
  },

  // d3 relies on the node-resolve plugin
  plugins: [
    svelte(),
    postcss(),
    nodeResolve(),
	  terser(),
  ]
};
