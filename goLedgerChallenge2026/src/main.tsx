// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BasicsProvider } from "./contexts/BasicsProvider.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <BrowserRouter>
      <BasicsProvider>
        <Provider>
          <App />
        </Provider>
      </BasicsProvider>
    </BrowserRouter>
  // </StrictMode>,
);
