/**
 * Serambi Digital - Tailwind CSS Configuration
 * SMK Negeri 2 Bandar Lampung Design System
 */

window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "#693844",
        "primary": "#501a2a",
        "on-tertiary-container": "#bdacaf",
        "on-primary-fixed-variant": "#6f3444",
        "on-tertiary-fixed-variant": "#504446",
        "secondary-container": "#febac8",
        "on-tertiary": "#ffffff",
        "secondary": "#844f5b",
        "primary-container": "#6b3040",
        "on-tertiary-fixed": "#23191b",
        "on-primary-fixed": "#390819",
        "on-secondary-fixed": "#350e19",
        "primary-fixed": "#ffd9e0",
        "tertiary": "#352a2d",
        "surface-dim": "#f3d2d8",
        "on-background": "#29161b",
        "surface-container-highest": "#fcdae1",
        "on-surface": "#29161b",
        "secondary-fixed": "#ffd9df",
        "on-surface-variant": "#524346",
        "background": "#fff8f8",
        "surface-container": "#ffe8ec",
        "inverse-primary": "#ffb1c2",
        "tertiary-fixed-dim": "#d4c2c5",
        "tertiary-fixed": "#f1dee1",
        "outline": "#847376",
        "on-secondary-container": "#7a4753",
        "on-error-container": "#93000a",
        "on-primary": "#ffffff",
        "surface-variant": "#fcdae1",
        "surface-bright": "#fff8f8",
        "surface-container-low": "#fff0f2",
        "on-secondary": "#ffffff",
        "surface-container-high": "#ffe1e6",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "secondary-fixed-dim": "#f8b5c2",
        "outline-variant": "#d7c1c4",
        "tertiary-container": "#4c4043",
        "inverse-on-surface": "#ffecef",
        "surface-container-lowest": "#ffffff",
        "surface-tint": "#8c4b5b",
        "surface": "#fff8f8",
        "on-primary-container": "#e99aac",
        "primary-fixed-dim": "#ffb1c2",
        "error": "#ba1a1a",
        "inverse-surface": "#402b30"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "space-md": "1.25rem",
        "gutter-mobile": "1rem",
        "space-xl": "3rem",
        "space-xs": "0.375rem",
        "margin": "2rem",
        "margin-mobile": "1rem",
        "space-sm": "0.75rem",
        "gutter": "1.5rem",
        "space-lg": "2rem"
      },
      fontFamily: {
        "display-lg-mobile": ["Playfair Display", "serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-md": ["Playfair Display", "serif"],
        "label-lg": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "quote-editorial": ["Playfair Display", "serif"],
        "headline-lg-mobile": ["Playfair Display", "serif"],
        "display-lg": ["Playfair Display", "serif"],
        "label-uppercase": ["Inter", "sans-serif"]
      },
      fontSize: {
        "display-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg": ["36px", { lineHeight: "44px", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-md": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }],
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "headline-sm": ["22px", { lineHeight: "30px", fontWeight: "600" }],
        "quote-editorial": ["20px", { lineHeight: "32px", letterSpacing: "0.01em", fontWeight: "400" }],
        "headline-lg-mobile": ["26px", { lineHeight: "34px", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "56px", fontWeight: "700" }],
        "label-uppercase": ["11px", { lineHeight: "16px", letterSpacing: "0.12em", fontWeight: "700" }]
      }
    }
  }
};
