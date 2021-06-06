import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { baseRobbinTheme } from '../../styles';
import { Button } from './index';

const renderPropComponent = (theme, props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Button
        color="primary"
        buttonStyle="outline"
        label="hello button"
        {...props}
      />
    </ThemeProvider>
  );

describe('Button', () => {
  test('render', () => {
    renderPropComponent(baseRobbinTheme);
  });
  test('sets label', async () => {
    const { getByText } = renderPropComponent(baseRobbinTheme);
    getByText('hello button');
  });
  test('class onClick', async () => {
    const onClick = jest.fn();
    const { getByText } = renderPropComponent(baseRobbinTheme, { onClick });
    fireEvent.click(getByText('hello button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
