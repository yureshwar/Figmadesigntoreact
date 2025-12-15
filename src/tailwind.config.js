/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
    "./imports/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        // Base semantic colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Card
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // Popover
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        
        // Primary
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        
        // Secondary
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        
        // Muted
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        
        // Accent
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        
        // Destructive
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        
        // Border, Input, Ring
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        
        // Chart colors
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        
        // Sidebar
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        
        // Widget-specific semantic colors
        widget: {
          // Panel
          panel: {
            DEFAULT: "hsl(var(--widget-panel-bg))",
            border: "hsl(var(--widget-panel-border))",
            shadow: "hsl(var(--widget-panel-shadow))",
          },
          
          // Text
          text: {
            primary: "hsl(var(--widget-text-primary))",
            secondary: "hsl(var(--widget-text-secondary))",
            "on-dark": "hsl(var(--widget-text-on-dark))",
          },
          
          // Icons
          icon: {
            primary: "hsl(var(--widget-icon-primary))",
            secondary: "hsl(var(--widget-icon-secondary))",
            disabled: "hsl(var(--widget-icon-disabled))",
            active: "hsl(var(--widget-icon-active))",
          },
          
          // Status
          status: {
            success: "hsl(var(--widget-status-success))",
            error: "hsl(var(--widget-status-error))",
            warning: "hsl(var(--widget-status-warning))",
            info: "hsl(var(--widget-status-info))",
          },
          
          // Button
          button: {
            primary: {
              DEFAULT: "hsl(var(--widget-button-primary-bg))",
              text: "hsl(var(--widget-button-primary-text))",
            },
          },
          
          // Input
          input: {
            DEFAULT: "hsl(var(--widget-input-bg))",
            border: "hsl(var(--widget-input-border))",
            shadow: "hsl(var(--widget-input-shadow))",
          },
          
          // Dialog
          dialog: {
            DEFAULT: "hsl(var(--widget-dialog-bg))",
            overlay: "hsl(var(--widget-dialog-overlay))",
            border: "hsl(var(--widget-dialog-border))",
          },
          
          // Tab
          tab: {
            active: {
              DEFAULT: "hsl(var(--widget-tab-active-bg))",
              text: "hsl(var(--widget-tab-active-text))",
            },
            inactive: {
              DEFAULT: "hsl(var(--widget-tab-inactive-bg))",
              text: "hsl(var(--widget-tab-inactive-text))",
              border: "hsl(var(--widget-tab-inactive-border))",
            },
          },
          
          // Card
          card: {
            DEFAULT: "hsl(var(--widget-card-bg))",
            border: "hsl(var(--widget-card-border))",
            "hover-shadow": "hsl(var(--widget-card-hover-shadow))",
          },
        },
      },
      
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
        
        // Widget-specific radius
        "widget-sm": "var(--widget-radius-sm)",
        "widget-md": "var(--widget-radius-md)",
        "widget-lg": "var(--widget-radius-lg)",
        "widget-full": "var(--widget-radius-full)",
      },
      
      opacity: {
        "widget-hover": "var(--widget-button-hover-opacity)",
      },
      
      fontWeight: {
        medium: "var(--font-weight-medium)",
        normal: "var(--font-weight-normal)",
      },
    },
  },
  plugins: [],
};