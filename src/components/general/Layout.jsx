import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider } from "@emotion/react";
// Style
import "normalize.css";
import styled from "@emotion/styled";
import GlobalStyle from "../../styles/global";
import theme from "../../styles/global/theme";
// Components
import Header from "./Header";
import Footer from "./Footer";

const MainWrapper = styled("div")`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 70px auto auto;
  grid-template-areas:
    "header"
    "main"
    "footer";

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Cursor /> */}
      <MainWrapper>
        <main>{children}</main>
        <Header />
        <Footer />
      </MainWrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
