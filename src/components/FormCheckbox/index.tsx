import React from 'react';
import styled from 'styled-components';
import { MdCheck } from 'react-icons/md';

export interface IFormCheckboxProps {
  /**
   * Label for the FormCheckbox, use children if need to render custom markup
   */
  label?: string;
  /**
   * FormId of the FormCheckbox
   */
  formId: string;
  /**
   * Error state of the FormCheckbox
   */
  error?: string | boolean;
  /**
   * Disable the FormCheckbox
   */
  disabled?: boolean;
  /**
   * ClassName of the FormCheckbox
   */
  className?: string;
}

/**
 * Basic Form Checkbox Component
 */
export const FormCheckbox: React.FunctionComponent<
  IFormCheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ children, formId, label, ...props }) => {
  return (
    <StyledLabel htmlFor={formId}>
      {children || label}
      <input {...props} type="checkbox" id={formId} />
      <span>
        <MdCheck />
      </span>
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 36px;
  input {
    display: none;
    &:checked ~ span {
      background: ${(props) => props.theme.colors.primary100};
      border-color: ${(props) => props.theme.colors.primary100};
      svg {
        display: block;
      }
    }
  }
  span {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.border.darkBorder};
    svg {
      display: none;
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
