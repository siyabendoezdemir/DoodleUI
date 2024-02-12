import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import sass from "rollup-plugin-sass";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        modules: true, // Enable CSS modules
        extensions: [".scss", ".css"],
        use: [
          [
            "sass",
            {
              includePaths: ["./src/styles", "./node_modules"],
            },
          ],
        ],
        extract: true, // Extract to a single file
        extract: path.resolve("dist/styles.css"), // Specify the output path
      }),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default(), sass()],
  },
];
