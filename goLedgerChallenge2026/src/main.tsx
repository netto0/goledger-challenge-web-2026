import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BasicsProvider } from "./contexts/BasicsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BasicsProvider>
      <App />
    </BasicsProvider>
  </StrictMode>,
);
