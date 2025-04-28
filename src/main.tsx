import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./debug.js"; // Import debug file

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(<App />);
