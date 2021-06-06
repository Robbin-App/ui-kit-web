import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { baseRobbinTheme } from '../../styles';
import { FormSelect } from './index';

const renderPropComponent = (theme, props = {}) => (
  <ThemeProvider theme={theme}>
    <FormSelect
      formId="test-id"
      label="select label"
      options={[
        { value: 'value', label: 'label', disabled: true },
        { value: 'value1', label: 'label1' },
      ]}
      {...props}
    />
  </ThemeProvider>
);

describe('FormSelect', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });

  describe('select', () => {
    test('calls onChange on select change', () => {
      const onChange = jest.fn();
      const { getByTestId } = render(
        renderPropComponent(baseRobbinTheme, {
          value: 'test',
          onChange,
        })
      );
      const select = getByTestId('select-test-id');
      fireEvent.change(select);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
    test('calls onFocus on select focus', () => {
      const onFocus = jest.fn();
      const { getByTestId } = render(
        renderPropComponent(baseRobbinTheme, {
          onFocus,
        })
      );
      const select = getByTestId('select-test-id');
      fireEvent.focus(select);
      expect(onFocus).toHaveBeenCalledTimes(1);
    });
    test('calls onBlur on select blur', () => {
      const onBlur = jest.fn();
      const { getByTestId } = render(
        renderPropComponent(baseRobbinTheme, {
          onBlur,
        })
      );
      const select = getByTestId('select-test-id');
      fireEvent.blur(select);
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
    test('calls onKeyDown on select keyDown', () => {
      const onKeyDown = jest.fn();
      const { getByTestId } = render(
        renderPropComponent(baseRobbinTheme, {
          onKeyDown,
        })
      );
      const select = getByTestId('select-test-id');
      fireEvent.keyDown(select);
      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });
  });

  describe('error', () => {
    test('displays error', () => {
      const { getByText } = render(
        renderPropComponent(baseRobbinTheme, { error: 'error-message' })
      );
      getByText('error-message');
    });
  });
});
