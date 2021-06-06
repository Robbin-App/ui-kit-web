import React from 'react';
import styled from 'styled-components';
import { FormGroup } from '../FormGroup';
import { useTextInputMiniLabel } from '../../hooks/useTextInputMiniLabel';

export interface IFormTextareaProps {
  /**
   * Label of the textarea element
   */
  label: string;
  /**
   * Id of the textarea also used in htmlFor in the label
   */
  formId: string;
  /**
   * Error state
   */
  error?: string | boolean;
  /**
   * Disable the textarea element
   */
  disabled?: boolean;
  /**
   * Value of the textarea element
   */
  value?: string;
  /**
   * onChange event of the textarea element
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const FormTextarea: React.FunctionComponent<
  IFormTextareaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({
  label,
  formId,
  onChange,
  error,
  value,
  className,
  disabled,
  rows = 6,
  onFocus,
  onBlur,
  onKeyDown,
  ...props
}) => {
  const {
    useMiniLabel,
    handleInputFocus,
    handleInputBlur,
    handleKeyDown,
    isFocus,
    ref,
  } = useTextInputMiniLabel<HTMLTextAreaElement>({
    onFocus,
    onBlur,
    onKeyDown,
    value,
  });
  return (
    <StyledFormGroup
      label={label}
      formId={formId}
      miniLabel={useMiniLabel}
      isFocus={isFocus}
      disabled={disabled}
      error={error}
      className={className}
    >
      <textarea
        {...props}
        ref={ref}
        placeholder=""
        id={formId}
        disabled={disabled}
        onChange={onChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        rows={rows}
      >
        {value}
      </textarea>
    </StyledFormGroup>
  );
};

const StyledFormGroup = styled(FormGroup)`
  label {
    top: ${(props) => (props.miniLabel ? 0 : '8px')};
    transform: translateY(${(props) => (props.miniLabel ? '6px' : 0)});
    bottom: auto;
    margin: 0;
  }
  .form-field {
    &:before {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      width: calc(100% - 14px);
      height: 20px;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: ${({ theme }) => theme.sizes.borderRadius};
    }
  }
`;
