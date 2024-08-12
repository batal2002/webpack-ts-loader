declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export = classes;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
  import { FC, SVGProps } from "react";

  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare const __PLATFORM__: "desktop" | "mobile";
declare const __ENV__: "production" | "development";
