import React from 'react';
import { FormGroup } from '../FormGroup';
import { useTextInputMiniLabel } from '../../hooks/useTextInputMiniLabel';

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
> = ({
  label,
  formId,
  error,
  value,
  onChange,
  disabled,
  className,
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
  } = useTextInputMiniLabel<HTMLInputElement>({
    onFocus,
    onBlur,
    onKeyDown,
    value,
    alwaysOn: props.type === 'date',
  });
  return (
    <FormGroup
      label={label}
      formId={formId}
      miniLabel={useMiniLabel}
      isFocus={isFocus}
      disabled={disabled}
      error={error}
      className={className}
    >
      <input
        {...props}
        ref={ref}
        placeholder=""
        id={formId}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
      />
    </FormGroup>
  );
};

export default FormInput;
