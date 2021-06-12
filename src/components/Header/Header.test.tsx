import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { baseRobbinTheme } from '../../styles';
import { defaultProps } from './Header.stories';
import { Header } from './index';

const renderPropComponent = (theme) => (
  <ThemeProvider theme={theme}>
    <Header {...defaultProps} />
  </ThemeProvider>
);

describe('Header', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
