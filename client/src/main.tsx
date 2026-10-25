import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Fragments never reach the server. Preserve old shared links in the browser.
if (
  window.location.hash.startsWith("#/") &&
  !window.location.hash.startsWith("#//")
) {
  const legacy = new URL(window.location.hash.slice(1), window.location.origin);
  if (legacy.origin === window.location.origin) {
    window.location.replace(legacy.pathname + legacy.search + legacy.hash);
  }
} else {
  const root = document.getElementById("root")!;
  if (root.hasChildNodes()) hydrateRoot(root, <App />);
  else createRoot(root).render(<App />);
}

// Analytics is optional and only loads when both configuration values exist.
const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const analyticsId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
if (analyticsEndpoint && analyticsId) {
  const analytics = document.createElement("script");
  analytics.defer = true;
  analytics.src = `${analyticsEndpoint.replace(/\/$/, "")}/umami`;
  analytics.dataset.websiteId = analyticsId;
  document.head.appendChild(analytics);
}
