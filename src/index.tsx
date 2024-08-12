import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import { App } from "./components/App";
import { LazyAbout } from "@/pages/about/About.lazy";
import { LazyShop } from "@/pages/shop/Shop.lazy";

const root = createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <LazyAbout />,
      },
      {
        path: "/shop",
        element: <LazyShop />,
      },
    ],
  },
]);

root.render(
  <Suspense fallback={"Loading..."}>
    <RouterProvider router={router} />
  </Suspense>,
);
