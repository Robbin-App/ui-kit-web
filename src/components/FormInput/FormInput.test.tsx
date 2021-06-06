import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from 'styled-components';
import { baseRobbinTheme } from '../../styles';
import FormInput from './index';

const renderPropComponent = (theme, props = {}) => (
  <ThemeProvider theme={theme}>
    <FormInput label="hello input" formId="test-id" {...props} />
  </ThemeProvider>
);

describe('FormInput', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });

  describe('label', () => {
    test('sets label', () => {
      const { getByLabelText } = render(renderPropComponent(baseRobbinTheme));
      getByLabelText('hello input');
    });
  });

  describe('input', () => {
    test('sets input id', () => {
      const { getByLabelText } = render(renderPropComponent(baseRobbinTheme));
      const input = getByLabelText('hello input', { selector: 'input' });
      expect(input.getAttribute('id')).toEqual('test-id');
    });
    test('sets input value', () => {
      const { getByLabelText } = render(
        renderPropComponent(baseRobbinTheme, {
          value: 'test',
          onChange: jest.fn(),
        })
      );
      const input = getByLabelText('hello input', { selector: 'input' });
      expect(input.value).toEqual('test');
    });
    test('calls onChange on input change', () => {
      const onChange = jest.fn();
      const { getByLabelText } = render(
        renderPropComponent(baseRobbinTheme, {
          value: 'test',
          onChange,
        })
      );
      const input = getByLabelText('hello input', { selector: 'input' });
      fireEvent.change(input, {
        target: { value: 'updated' },
      });
      expect(onChange).toHaveBeenCalledTimes(1);
    });
    test('calls onFocus on input focus', () => {
      const onFocus = jest.fn();
      const { getByLabelText } = render(
        renderPropComponent(baseRobbinTheme, {
          onFocus,
        })
      );
      const input = getByLabelText('hello input', { selector: 'input' });
      fireEvent.focus(input, {
        target: { value: 'updated' },
      });
      expect(onFocus).toHaveBeenCalledTimes(1);
    });
    test('calls onBlur on input blur', () => {
      const onBlur = jest.fn();
      const { getByLabelText } = render(
        renderPropComponent(baseRobbinTheme, {
          onBlur,
        })
      );
      const input = getByLabelText('hello input', { selector: 'input' });
      fireEvent.blur(input, {
        target: { value: 'updated' },
      });
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
    test('calls onKeyDown on input keydown', () => {
      const onKeyDown = jest.fn();
      const { getByLabelText } = render(
        renderPropComponent(baseRobbinTheme, {
          onKeyDown,
        })
      );
      const input = getByLabelText('hello input', { selector: 'input' });
      fireEvent.keyDown(input, {
        target: { value: 'updated' },
      });
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
