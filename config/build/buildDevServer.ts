import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;
  return {
    port: port ?? 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
