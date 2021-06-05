import React, { useEffect, useRef, useState } from 'react';
import { FormGroup } from '../FormGroup';

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
  ...props
}) => {
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
    </FormGroup>
  );
};

export default FormInput;
