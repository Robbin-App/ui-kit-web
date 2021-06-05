import { ThemeProvider } from 'styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { baseRobbinTheme } from '../../styles';
import { GenericFormCard } from './index';

const renderPropComponent = (theme) => (
  <ThemeProvider theme={theme}>
    <GenericFormCard title="test title" />
  </ThemeProvider>
);

describe('GenericFormCard', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
