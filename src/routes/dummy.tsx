import { createFileRoute } from "@tanstack/solid-router";

import { ConfigurationPanel } from "../components/domain/configuration/configuration-panel";

export const Route = createFileRoute("/dummy")({
  component: Dummy,
});

function Dummy() {
  return (
    <main>
      <ConfigurationPanel />
      <p>dummy</p>
    </main>
  );
}
