import React from 'react';
import styled from 'styled-components';
import { getRem } from '../../helpers';

export interface IFormGroupProps {
  /**
   * Label of the form group
   */
  label: string;
  /**
   * FormId of the form group
   */
  formId: string;
  /**
   * Error state
   */
  error?: string | boolean;
  /**
   * Disable the input in the form group
   */
  disabled?: boolean;
  /**
   * ClassName of the form group
   */
  className?: string;
  /**
   * Use miniLabel
   */
  miniLabel: boolean;
  /**
   * Is form group input focus
   */
  isFocus: boolean;
}

/**
 * Container for form inputs
 */
export const FormGroup: React.FunctionComponent<IFormGroupProps> = ({
  className,
  error,
  formId,
  label,
  disabled,
  miniLabel,
  isFocus,
  children,
}) => (
  <FormGroupContainer className={className}>
    <FormField
      {...{ error, miniLabel, isFocus, disabled }}
      className="form-field"
    >
      <label htmlFor={formId}>{label}</label>
      {children}
    </FormField>
    {error && <small>{error}</small>}
  </FormGroupContainer>
);

const FormGroupContainer = styled.div`
  position: relative;
  margin-bottom: 22px;
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
  miniLabel: boolean;
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
    transform: translateY(${(props) => (props.miniLabel ? '6px' : 0)});
    top: 0;
    transition: transform 0.3s ease-out;
    bottom: ${(props) => (props.miniLabel ? 'auto' : 0)};
    font-size: ${(props) => (props.miniLabel ? getRem(12) : getRem(16))};
    line-height: ${(props) => (props.miniLabel ? getRem(12) : getRem(20))};
    font-weight: ${(props) =>
      props.miniLabel
        ? props.theme.fonts.weight.bold
        : props.theme.fonts.weight.regular};
    margin: auto 0;
    pointer-events: none;
  }
  input,
  select,
  textarea {
    width: 100%;
    font-size: ${getRem(16)};
    line-height: ${getRem(20)};
    padding: 22px 14px 10px;
    transition: all 0.3s ease-in;
    color: ${({ theme }) => theme.colors.text.globalText};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.border.darkBorder};
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
  input,
  select {
    min-height: 54px;
  }
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  textarea {
    border-bottom-right-radius: 0;
    &::-webkit-scrollbar {
      width: 14px;
    }

    &::-webkit-scrollbar-thumb {
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
      background-color: ${({ theme }) => theme.colors.border.darkBorder};
    }
  }
`;
