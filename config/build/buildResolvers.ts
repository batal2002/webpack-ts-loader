import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildResolvers(
  options: BuildOptions,
): Configuration["resolve"] {
  const { paths } = options;

  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": paths.src,
    },
  };
}
