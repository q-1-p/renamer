import React from "react";
import ReactDOM from "react-dom/client";

import { MenuBar } from "./components/domain/menu/menu-bar";
import { Editor } from "./components/editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";

function App() {
  const handlePanelResize = (sizes: number[]) => {
    localStorage.setItem(
      "sidebar-width",
      Math.round((sizes[0] / 100) * window.innerWidth).toString(),
    );
  };

  return (
    <div className="flex h-[100vh] text-sm">
      <ResizablePanelGroup direction="horizontal" onLayout={handlePanelResize}>
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
          <MenuBar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Editor />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
