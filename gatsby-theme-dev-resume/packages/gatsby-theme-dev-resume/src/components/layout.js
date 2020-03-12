/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            scroll-behavior: smooth;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            overflow-x: hidden;
            max-width: 1200px;
            margin: 0 auto;
          }
        `}
      />
      {children}
    </>
  );
};

export default Layout;
