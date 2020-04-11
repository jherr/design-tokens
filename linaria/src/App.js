import React from "react";
import { css } from "linaria";
import { styled } from "linaria/react";
import Color from "color";

const tokens = {
  highlightColor: "#90EE90",
  borderSize: "5px",
};

const appStyle = css`
  font-family: Arial, Helvetica, sans-serif;
  font-size: xx-large;
`;

const HighlightPanel = styled.div`
  padding: 1em;
  margin: 1em;
  border-radius: 0.5em;
  border: ${tokens.borderSize} solid
    ${Color(tokens.highlightColor).darken(0.7).hex()};
  background-color: ${tokens.highlightColor};
`;

function App() {
  return (
    <div className={appStyle}>
      <HighlightPanel>This is a highlight-panel</HighlightPanel>
    </div>
  );
}

export default App;
