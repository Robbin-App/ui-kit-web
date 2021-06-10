import { ThemeProvider } from 'styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { baseRobbinTheme } from '../../styles';
import { FormCheckbox } from './index';

const renderPropComponent = (theme, props = {}) => (
  <ThemeProvider theme={theme}>
    <FormCheckbox label="test label" formId="test-id" {...props} />
  </ThemeProvider>
);

describe('FormCheckbox', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
