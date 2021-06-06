import { ThemeProvider } from 'styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { baseRobbinTheme } from '../../styles';
import { Chip } from './index';

const renderPropComponent = (theme, props = {}) => (
  <ThemeProvider theme={theme}>
    <Chip label="test label" {...props} />
  </ThemeProvider>
);

describe('Chip', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
  test('call onChange on button click', () => {
    const onClearClick = jest.fn();
    const { getByTestId } = render(
      renderPropComponent(baseRobbinTheme, { onClearClick })
    );
    fireEvent.click(getByTestId('chip-button-test-id'));
    expect(onClearClick).toHaveBeenCalledTimes(1);
  });
});
