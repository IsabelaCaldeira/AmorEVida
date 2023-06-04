import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Global.css";
import App from "./routes";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
