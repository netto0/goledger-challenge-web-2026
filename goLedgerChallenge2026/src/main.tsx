import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BasicsProvider } from "./contexts/BasicsProvider.tsx";
import { Provider } from "./components/ui/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BasicsProvider>
      <Provider>
        <App />
      </Provider>
    </BasicsProvider>
  </StrictMode>,
);
