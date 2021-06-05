import React from 'react';
import {ThemeProvider} from "styled-components";
import {baseRobbinTheme, GlobalStyles} from "../src";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <ThemeProvider theme={baseRobbinTheme}>
      <GlobalStyles/>
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
