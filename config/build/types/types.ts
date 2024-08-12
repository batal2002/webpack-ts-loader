export interface BuildPath {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}

export type BuildMode = "development" | "production";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {
  port: number;
  paths: BuildPath;
  mode: BuildMode;
  isDev: boolean;
  isProd: boolean;
  platform: BuildPlatform;
  analyzer?: boolean;
}
