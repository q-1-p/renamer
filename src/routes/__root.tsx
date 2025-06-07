import { Outlet, createRootRoute } from "@tanstack/solid-router";
import { FunctionSidebar } from "../components/domain/function/function-sidebar";
// import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <main class="flex">
      <FunctionSidebar />
      <Outlet />
    </main>
  ),
});
