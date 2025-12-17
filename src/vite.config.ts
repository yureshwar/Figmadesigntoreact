import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Shadow DOM CSS Injection Plugin
 * 
 * This plugin mimics webpack's custom style-loader behavior.
 * It automatically injects CSS into Shadow DOM instead of document head.
 * 
 * Similar to webpack config:
 * {
 *   loader: 'style-loader',
 *   options: {
 *     insert: function (linkTag) {
 *       const parent = document.querySelector('#udan-react-root').shadowRoot;
 *       parent.appendChild(linkTag);
 *     }
 *   }
 * }
 */
function shadowDOMCSSInjector(): Plugin {
  return {
    name: 'vite-plugin-shadow-dom-css',
    apply: 'build', // Only in build mode
    
    transformIndexHtml: {
      enforce: 'post',
      transform(html) {
        // Inject the CSS interceptor script
        const interceptorScript = `
          <script>
            (function() {
              'use strict';
              
              // Queue to store styles until Shadow DOM is ready
              const styleQueue = [];
              let shadowRootReady = false;
              
              // Function to inject style into Shadow DOM
              function injectIntoShadowDOM(styleElement) {
                const shadowHost = document.getElementById('udan-react-root');
                if (shadowHost && shadowHost.shadowRoot) {
                  shadowHost.shadowRoot.appendChild(styleElement);
                  return true;
                }
                return false;
              }
              
              // Process queued styles
              function processQueue() {
                while (styleQueue.length > 0) {
                  const style = styleQueue.shift();
                  if (!injectIntoShadowDOM(style)) {
                    styleQueue.unshift(style);
                    break;
                  }
                }
              }
              
              // Check for Shadow DOM periodically
              const checkInterval = setInterval(() => {
                const shadowHost = document.getElementById('udan-react-root');
                if (shadowHost && shadowHost.shadowRoot) {
                  shadowRootReady = true;
                  processQueue();
                  clearInterval(checkInterval);
                }
              }, 10);
              
              // Intercept appendChild on document.head
              const originalAppendChild = HTMLHeadElement.prototype.appendChild;
              HTMLHeadElement.prototype.appendChild = function(node) {
                // Check if it's a style element
                if (node && node.tagName === 'STYLE') {
                  // Try to inject into Shadow DOM
                  if (shadowRootReady) {
                    if (injectIntoShadowDOM(node)) {
                      return node;
                    }
                  }
                  
                  // Queue it if Shadow DOM not ready
                  styleQueue.push(node);
                  return node;
                }
                
                // For non-style elements, use original behavior
                return originalAppendChild.call(this, node);
              };
              
              // Also intercept insertBefore
              const originalInsertBefore = HTMLHeadElement.prototype.insertBefore;
              HTMLHeadElement.prototype.insertBefore = function(node, referenceNode) {
                if (node && node.tagName === 'STYLE') {
                  if (shadowRootReady) {
                    if (injectIntoShadowDOM(node)) {
                      return node;
                    }
                  }
                  styleQueue.push(node);
                  return node;
                }
                return originalInsertBefore.call(this, node, referenceNode);
              };
              
              // Cleanup interval after 5 seconds
              setTimeout(() => {
                if (checkInterval) {
                  clearInterval(checkInterval);
                  // Process any remaining styles
                  processQueue();
                }
              }, 5000);
            })();
          </script>
        `;
        
        return html.replace('</head>', `${interceptorScript}\n</head>`);
      }
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    shadowDOMCSSInjector()
  ],
  
  build: {
    outDir: 'dist',
    
    // CSS configuration
    cssCodeSplit: false, // Single CSS bundle
    
    rollupOptions: {
      output: {
        // Single bundle output
        inlineDynamicImports: true,
        
        // File naming
        entryFileNames: 'udan-widget.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
    
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true // Remove console.log in production
      }
    }
  },
  
  // Resolve configuration
  resolve: {
    alias: {
      // Add any aliases you need
    }
  }
});
