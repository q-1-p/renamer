import React from "react";
import ReactDOM from "react-dom/client";

import { Editor } from "./components/editor";
import { SettingBar } from "./components/setting-bar";
import { SideBar } from "./components/side-bar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex text-sm">
      <SideBar />
      <SettingBar />
      <Editor />
    </div>
  </React.StrictMode>,
);
