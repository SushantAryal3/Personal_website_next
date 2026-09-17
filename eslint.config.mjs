import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["node_modules/three-stdlib/**/*.d.ts"],
    rules: {
      "no-restricted-syntax": "off",
      "@typescript-eslint/no-redeclare": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // catches unused imports (e.g. leftover usePathname)
      "react/jsx-no-undef": "error", // catches malformed/broken JSX like unmatched tags
      "react/self-closing-comp": "warn", // flags e.g. <div></div> that should be <div />
      "@typescript-eslint/no-explicit-any": "off", // relax if you use `any` intentionally sometimes
    },
  },
];

export default eslintConfig;
