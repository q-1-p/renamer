import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/dummy")({
  component: Dummy,
});

function Dummy() {
  return <div class="p-2">Dummy!</div>;
}
