import eslintConfig from "@avivox-monorepo/eslint-config/react.js";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  //
  eslintConfig,
  globalIgnores(["node_modules", "build"]),
]);
