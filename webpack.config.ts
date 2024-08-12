import { Configuration } from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import {
  BuildMode,
  BuildPath,
  BuildPlatform,
} from "./config/build/types/types";
import path from "path";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  platform?: BuildPlatform;
  analyzer?: boolean;
}

export default (env: EnvVariables) => {
  const paths: BuildPath = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };

  const config: Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    isDev: env.mode === "development",
    isProd: env.mode === "production",
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  });

  return config;
};
