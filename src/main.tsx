/**
 * React app bootstrap & Page Injection
 * 
 * This file creates the Shadow DOM structure.
 * CSS is automatically injected by Vite plugin (similar to webpack's custom style-loader).
 * No need to manually capture or inject styles!
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ShadowRootProvider } from './contexts/ShadowRootContext';

/**
 * Creating shadow root element for UDAN plugin
 * (Exact same structure as your webpack implementation)
 */

const htmlTag = document.querySelector("html");

// Create udan custom container and push udan shadow
const udanContainer = document.createElement("udan");

// React mounter
const rootDiv = document.createElement("div");
rootDiv.id = "udan-react-root";
rootDiv.classList.add("uda_exclude");

udanContainer.appendChild(rootDiv);

// Check if html available
if (htmlTag) {
  htmlTag.appendChild(udanContainer);
} else {
  console.error("UDAN Widget: HTML tag not found!");
}

// Attach shadow to the container
export const shadowHost = document.getElementById('udan-react-root');
if (!shadowHost) {
  throw new Error("UDAN Widget: Shadow host not found!");
}

shadowHost.attachShadow({ mode: 'open' });

// Get the shadow root
const shadowRoot = shadowHost.shadowRoot;
if (!shadowRoot) {
  throw new Error("UDAN Widget: Could not create shadow root!");
}

console.log("✅ Shadow Root created");

// Create div element for react to render into
const reactDiv = document.createElement('div');
reactDiv.setAttribute('id', 'udan-react-app-root');

// Append react root to shadow root
shadowRoot.appendChild(reactDiv);

console.log("✅ React container created in Shadow DOM");

// Create React root and render
const reactRoot = createRoot(reactDiv);

reactRoot.render(
  <React.StrictMode>
    <ShadowRootProvider shadowRoot={shadowRoot}>
      <App />
    </ShadowRootProvider>
  </React.StrictMode>
);

console.log("✅ UDAN Widget initialized successfully!");

// Expose for debugging
if (typeof window !== 'undefined') {
  (window as any).udanShadowRoot = shadowRoot;
  (window as any).udanReactRoot = reactRoot;
}
