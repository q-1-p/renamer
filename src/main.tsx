import { RouterProvider, createRouter } from "@tanstack/solid-router";
import { render } from "solid-js/web";
import "virtual:uno.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement.innerHTML) {
  render(() => <RouterProvider router={router} />, rootElement);
}
