import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "@styles/global.style";
import { BrowserRouter, RouterProvider } from "react-router-dom";

if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <>
        <GlobalStyle />
        <RouterProvider router={App} />
    </>
);
