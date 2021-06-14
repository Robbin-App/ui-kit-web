import { ThemeProvider } from 'styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { baseRobbinTheme } from '../../styles';
import { Select } from './index';

const renderPropComponent = (theme) => (
  <ThemeProvider theme={theme}>
    <Select
      formId="select-id"
      label="Género"
      options={[
        {
          label: 'Mujer',
          value: 'female',
        },
        {
          label: 'Hombre',
          value: 'male',
        },
        {
          label: 'Otro',
          value: 'other',
        },
      ]}
      placeholder="¿Cómo te identificas?"
    />
  </ThemeProvider>
);

describe('Select', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
