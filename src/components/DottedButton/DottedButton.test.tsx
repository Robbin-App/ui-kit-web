import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { baseRobbinTheme } from '../../styles';
import { DottedButton } from './index';

const renderPropComponent = (theme, props = {}) => (
  <ThemeProvider theme={theme}>
    <DottedButton label="hello dotted-button" fullWidth={true} {...props} />
  </ThemeProvider>
);
describe('DottedButton', () => {
  test('render', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
  test('sets label', async () => {
    const { getByText } = render(renderPropComponent(baseRobbinTheme));
    getByText('hello dotted-button');
  });
  test('class onClick', async () => {
    const onClick = jest.fn();
    const { getByText } = render(
      renderPropComponent(baseRobbinTheme, { onClick })
    );
    fireEvent.click(getByText('hello dotted-button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
