import React, { useRef, useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styled from 'styled-components';
import { FormGroup } from '../FormGroup';

export interface IFormSelectProps {
  /**
   * Label of the select element
   */
  label: string;
  /**
   * Id of the select also used in htmlFor in the label
   */
  formId: string;
  /**
   * Error state
   */
  error?: string | boolean;
  /**
   * Disable the select element
   */
  disabled?: boolean;
  /**
   * Value of the select element
   */
  value?: string | number;
  /**
   * Options of the select element
   */
  options: { value: string; label: string; disabled?: boolean }[];
  /**
   * onChange event of the select element
   */
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export const FormSelect: React.FunctionComponent<
  IFormSelectProps & React.SelectHTMLAttributes<HTMLSelectElement>
> = ({
  error,
  className,
  disabled,
  formId,
  label,
  value,
  onChange,
  options,
  ...props
}) => {
  const selectElement = useRef<HTMLSelectElement | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleInputFocus = (event: React.FocusEvent<HTMLSelectElement>) => {
    props.onFocus && props.onFocus(event);
    setIsFocus(true);
  };
  const handleInputBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    props.onBlur && props.onBlur(event);
    setIsFocus(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSelectElement>) => {
    props.onKeyDown && props.onKeyDown(event);
    if (event.key.toLowerCase() === 'escape') {
      selectElement.current?.blur();
    }
  };

  return (
    <FormGroup
      label={label}
      formId={formId}
      miniLabel={true}
      isFocus={isFocus}
      disabled={disabled}
      error={error}
      className={className}
    >
      <select
        {...props}
        ref={selectElement}
        placeholder=""
        id={formId}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        data-testid="select-test-id"
      >
        {options.map(({ label, value, disabled }) => (
          <option key={value} value={value} disabled={disabled}>
            {label}
          </option>
        ))}
      </select>
      <StyledArrowIcon />
    </FormGroup>
  );
};

const StyledArrowIcon = styled(ArrowDropDownIcon)`
  color: ${(props) => props.theme.colors.text.globalText};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  pointer-events: none;
`;
