import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const globalStyles = css`
  ${normalize}
  * {
    box-sizing: border-box;
    font-feature-settings: 'lnum';
    &:focus {
      outline: 1px solid ${(props) => props.theme.colors.secondary100};
    }
  }
  body {
    font-family: 'Nunito', sans-serif;
    color: ${(props) => props.theme.colors.text.globalText};
    font-size: 16px;
  }
  html,
  body {
    overflow-x: hidden;
    position: relative;
  }

  html {
    scroll-behavior: smooth;
  }

  input {
    -webkit-appearance: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.text.headingText};
  }

  a {
    color: inherit;
  }
`;

export const container = css`
  max-width: ${(props) => props.theme.sizes.containerMaxWidth}px;
  padding-left: 24px;
  padding-right: 24px;
  margin: auto;
  @media screen and (min-width: ${(props) =>
      props.theme.sizes.containerMaxWidth + 48}px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const GlobalStyles = createGlobalStyle`${globalStyles}`;
