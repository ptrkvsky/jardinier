import React from "react";
import { Global, css } from "@emotion/react";
import OpenSansRegular from "../../assets/fonts/open_sans/open-sans-v18-latin-regular.woff2";
import OpenSansBold from "../../assets/fonts/open_sans/open-sans-v18-latin-700.woff2";
import PlayfairBold from "../../assets/fonts/playfair/playfair-display-v22-latin-800.woff2";
import theme from "./theme";
import fonts from "./fonts";
import mediaQueries from "./mediaQueries";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        /* FONTS */
        @font-face {
          font-family: "open-regular";
          src: url(${OpenSansRegular});
          font-display: swap;
        }
        @font-face {
          font-family: "open-bold";
          src: url(${OpenSansBold});
          font-display: swap;
        }
        @font-face {
          font-family: "playfair-bold";
          src: url(${PlayfairBold});
          font-display: swap;
        }

        * {
          box-sizing: border-box;
        }

        body {
          background: ${theme.bg.main};
          color: ${theme.colors.main};
          font-family: ${fonts.main};
          font-size: 0.972vw;
          font-size: clamp(1.2rem, 0.972vw, 2.8rem);
          font-style: normal;
          letter-spacing: 0.02em;
        }

        iframe {
          max-width: 100%;
        }

        #___gatsby {
          background-color: #fff;
        }

        strong {
          font-family: ${fonts.title};
          font-size: 1.05em;
        }

        input:focus {
          outline: none !important;
          border: none;
          background-color: #e8e8e8;
          padding-left: 8px;
        }

        textarea:focus {
          border: none;
          outline: none !important;
          padding-left: 12px;
          background-color: #e8e8e8;
        }

        a,
        .daclok {
          text-decoration: underline;
          color: inherit;
        }

        /*Gatsby transition */
        .tl-edges {
          overflow-x: initial;
        }

        /* HELPERS */
        .max-container {
          max-width: ${theme.maxWidth};
          margin-left: auto;
          margin-right: auto;
          ${mediaQueries.tabletLandscape} {
            width: 100%;
            padding: 0 5%;
          }
        }

        .d-block {
          display: block;
        }

        .v-hidden {
          visibility: hidden;
        }

        .o-hidden {
          overflow: hidden;
        }

        .hide-text {
          display: block;
          overflow: hidden;
          line-height: 1;
        }
      `}
    />
  );
}
