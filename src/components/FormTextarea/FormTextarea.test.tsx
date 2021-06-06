import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { baseRobbinTheme } from '../../styles';
import { FormTextarea } from './index';

const renderPropComponent = (theme, props = {}) => (
  <ThemeProvider theme={theme}>
    <FormTextarea label="hello textarea" formId="test-id" {...props} />
  </ThemeProvider>
);

describe('FormTextarea', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
  describe('textarea', () => {
    test('calls onChange on textarea change', () => {
      const onChange = jest.fn();
      const { getByLabelText } = render(
        renderPropComponent(baseRobbinTheme, {
          value: 'test',
          onChange,
        })
      );
      const textarea = getByLabelText('hello textarea', {
        selector: 'textarea',
      });
      fireEvent.change(textarea, {
        target: { value: 'updated' },
      });
      expect(onChange).toHaveBeenCalledTimes(1);
    });
    test('calls onFocus on textarea focus', () => {
      const onFocus = jest.fn();
      const { getByLabelText } = render(
        renderPropComponent(baseRobbinTheme, {
          onFocus,
        })
      );
      const textarea = getByLabelText('hello textarea', {
        selector: 'textarea',
      });
      fireEvent.focus(textarea, {
        target: { value: 'updated' },
      });
      expect(onFocus).toHaveBeenCalledTimes(1);
    });
    test('calls onBlur on textarea blur', () => {
      const onBlur = jest.fn();
      const { getByLabelText } = render(
        renderPropComponent(baseRobbinTheme, {
          onBlur,
        })
      );
      const textarea = getByLabelText('hello textarea', {
        selector: 'textarea',
      });
      fireEvent.blur(textarea, {
        target: { value: 'updated' },
      });
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
    test('calls onKeyDown on textarea keydown', () => {
      const onKeyDown = jest.fn();
      const { getByLabelText } = render(
        renderPropComponent(baseRobbinTheme, {
          onKeyDown,
        })
      );
      const textarea = getByLabelText('hello textarea', {
        selector: 'textarea',
      });
      fireEvent.keyDown(textarea, {
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
