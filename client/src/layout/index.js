import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    background: #9c9caf;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  ul {
    list-style-type: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header type="full" />
      {children}
    </Fragment>
  );
};

export default Layout;