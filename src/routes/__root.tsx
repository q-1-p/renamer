import { Outlet, createRootRoute } from "@tanstack/solid-router";
// import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

import { FunctionSidebar } from "../components/domain/function/function-sidebar";

export const Route = createRootRoute({
  component: () => (
    <div class="flex bg-gray-900 text-white">
      <FunctionSidebar />
      <Outlet />
    </div>
  ),
});
