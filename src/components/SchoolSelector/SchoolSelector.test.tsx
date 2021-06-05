import { ThemeProvider } from 'styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { baseRobbinTheme } from '../../styles';
import { SchoolSelector } from './index';

const renderPropComponent = (theme, props = {}) => (
  <ThemeProvider theme={theme}>
    <SchoolSelector
      name="test name"
      logoSrc="logo src"
      logoAlt="logo alt"
      {...props}
    />
  </ThemeProvider>
);

describe('SchoolSelector', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
  test('calls onClick', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      renderPropComponent(baseRobbinTheme, { onClick })
    );
    fireEvent.click(getByText('test name'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
