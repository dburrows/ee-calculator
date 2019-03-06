import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import "styled-components/macro";
import { Normalize } from "styled-normalize";
import { colors } from "./constants/colors";
import { ReactComponent as Logo } from "./assets/ee-logo.svg";
import { ReadoutContainer } from "./containers/ReadoutContainer";
import { KeypadContainer } from "./containers/KeypadContainer";
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    box-sizing: border-box;
    padding: 10px;
    background-color: ${colors.eeLightGrey};
     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Normalize />
        <GlobalStyle />
        <header
          className="App-header"
          css={`
            background-color: ${colors.eeBlue};
            padding: 3px 1px 1px 4px;
          `}
        >
          <Logo
            css={`
              height: 100px;
            `}
          />
        </header>
        <ReadoutContainer />
        <KeypadContainer />
      </div>
    );
  }
}

export default App;
