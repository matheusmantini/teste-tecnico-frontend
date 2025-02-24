// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  ...compat.extends("next", "next/typescript"),
  {
    files: ["*.ts", "*.tsx"],
    plugins: {
      "@next/next": require("@next/eslint-plugin-next"),
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
    },
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];
