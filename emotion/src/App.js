import React from "react";
import { css } from "emotion";
import Color from "color";

import "./App.css";

const tokens = {
  highlightColor: "#90EE90",
  borderSize: "5px",
};

const panelCss = css`
  padding: 1em;
  margin: 1em;
  border-radius: 0.5em;
  border: ${tokens.borderSize} solid
    ${Color(tokens.highlightColor).darken(0.7).hex()};
  background-color: ${tokens.highlightColor};
`;

const HiglightPanel = ({ children }) => (
  <div className={panelCss}>{children}</div>
);

function App() {
  return (
    <div>
      <HiglightPanel>This is a highlight-panel</HiglightPanel>
    </div>
  );
}

export default App;
