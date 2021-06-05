import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getRem } from '../../helpers';

export interface IFormInputProps {
  /**
   * Label of the Input element
   */
  label: string;
  /**
   * Id of the input also used in htmlFor in the label
   */
  formId: string;
  /**
   * Error state
   */
  error?: string | boolean;
  /**
   * Disable the input element
   */
  disabled?: boolean;
  /**
   * Value of the Input element
   */
  value?: string;
  /**
   * onChange event of the Input element
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Basic Form Input Component
 */
export const FormInput: React.FunctionComponent<
  IFormInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, formId, error, value, onChange, disabled, ...props }) => {
  const inputElement = useRef<HTMLInputElement | null>(null);
  const [useMiniLabel, setUseMiniLabel] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    props.onFocus && props.onFocus(event);
    setUseMiniLabel(true);
    setIsFocus(true);
  };
  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur && props.onBlur(event);
    if (String(value).length === 0) setUseMiniLabel(false);
    setIsFocus(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    props.onKeyDown && props.onKeyDown(event);
    if (event.key.toLowerCase() === 'escape') {
      inputElement.current?.blur();
    }
  };

  useEffect(() => {
    if (!isFocus) setUseMiniLabel(String(value).length > 0);
  }, [value]);
  return (
    <FormGroup>
      <FormField {...{ error, useMiniLabel, isFocus, disabled }}>
        <label htmlFor={formId}>{label}</label>
        <input
          {...props}
          ref={inputElement}
          placeholder=""
          id={formId}
          disabled={disabled}
          value={value}
          onChange={onChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </FormField>
      {error && <small>{error}</small>}
    </FormGroup>
  );
};

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 12px;
  small {
    position: absolute;
    width: 100%;
    top: calc(100% + 4px);
    left: 0;
    display: block;
    font-size: ${getRem(12)};
    line-height: ${getRem(12)};
    color: ${({ theme }) => theme.colors.error};
  }
`;

const FormField = styled.div<{
  isFocus: boolean;
  useMiniLabel: boolean;
  disabled?: boolean;
  error?: string | boolean;
}>`
  position: relative;
  label {
    display: flex;
    align-items: center;
    position: absolute;
    left: 14px;
    color: ${(props) =>
      props.error
        ? props.theme.colors.error
        : props.disabled
        ? props.theme.colors.text.disabledText
        : props.theme.colors.text.globalText};
    transform: translateY(${(props) => (props.useMiniLabel ? '6px' : 0)});
    top: 0;
    transition: transform 0.3s ease-out;
    bottom: ${(props) => (props.useMiniLabel ? 'auto' : 0)};
    font-size: ${(props) => (props.useMiniLabel ? getRem(10) : getRem(16))};
    line-height: ${(props) => (props.useMiniLabel ? getRem(12) : getRem(20))};
    font-weight: ${(props) =>
      props.useMiniLabel
        ? props.theme.fonts.weight.bold
        : props.theme.fonts.weight.regular};
    margin: auto 0;
    pointer-events: none;
  }
  input {
    font-size: ${getRem(16)};
    line-height: ${getRem(20)};
    padding: 22px 14px 10px;
    transition: all 0.3s ease-in;
    color: ${({ theme }) => theme.colors.text.globalText};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.darkBorder};
    background-color: ${({ theme }) => theme.colors.white};
    &:focus {
      outline: none;
      border-color: ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.primary90};
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.text.disabledText};
      border-color: ${({ theme }) => theme.colors.text.disabledText};
    }
  }
`;

export default FormInput;
