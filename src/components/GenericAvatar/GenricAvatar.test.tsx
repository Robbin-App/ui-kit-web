import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { baseRobbinTheme } from '../../styles';
import { GenericAvatar } from './index';

const renderPropComponent = (theme) => (
  <ThemeProvider theme={theme}>
    <GenericAvatar>JD</GenericAvatar>
  </ThemeProvider>
);

describe('GenericAvatar', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
