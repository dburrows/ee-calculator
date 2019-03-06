import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import "styled-components/macro";
import { Normalize } from "styled-normalize";
import { colors } from "./constants/colors";
import { ReactComponent as Logo } from "./assets/ee-logo.svg";

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
    background-color: ${colors.eeLightGrey}
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
      </div>
    );
  }
}

export default App;
