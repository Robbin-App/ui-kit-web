import React from 'react';
import ReactSelect, { Props } from 'react-select';
import styled, { useTheme } from 'styled-components';
import { IBaseRobbinTheme } from '../../styles';
import { getRem } from '../../helpers';

export interface ISelectProps extends Props {
  /**
   * Label of the select element
   */
  label: string;
  /**
   * Placeholder of the select element
   */
  placeholder: string;
  /**
   * Id of the select also used in htmlFor in the label
   */
  formId: string;
  /**
   * Error state
   */
  error?: string | boolean;
}

export const Select: React.FunctionComponent<ISelectProps> = ({
  label,
  formId,
  error,
  placeholder,
  ...props
}) => {
  const { colors } = useTheme() as IBaseRobbinTheme;
  return (
    <Container error={error}>
      <label htmlFor={formId}>{label}</label>
      <ReactSelect
        {...props}
        placeholder={placeholder}
        inputId={formId}
        classNamePrefix="select"
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          colors: {
            ...theme.colors,
            primary: colors.primary100,
            neutral20: colors.border.lightBorder,
            neutral30: colors.border.lightBorder,
            neutral50: colors.text.globalText,
            neutral60: colors.text.globalText,
            neutral80: colors.text.globalText,
          },
        })}
      />
      {error && <small>{error}</small>}
    </Container>
  );
};

const Container = styled.div<{ error?: string | boolean }>`
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
  label {
    z-index: 1;
    display: flex;
    align-items: center;
    position: absolute;
    left: 14px;
    top: 6px;
    color: ${(props) =>
      props.error
        ? props.theme.colors.error
        : props.theme.colors.text.globalText};
    font-size: ${getRem(12)};
    line-height: ${getRem(12)};
    font-weight: ${(props) => props.theme.fonts.weight.bold};
    margin: auto 0;
    pointer-events: none;
  }
  .select__control {
    min-height: 54px;
    padding: 0;
    border-color: ${(props) =>
      props.error
        ? props.theme.colors.error
        : props.theme.colors.border.lightBorder};
    &--is-focused {
      box-shadow: none;
    }
  }

  .select__input {
    height: 0;
    display: none;
  }

  .select__value-container {
    padding: 22px 14px 10px;
  }

  .select__placeholder {
    margin: 0;
    position: static;
    top: auto;
    transform: none;
    font-size: ${getRem(16)};
    line-height: ${getRem(20)};
    & + div {
      padding: 0;
      margin: 0;
    }
  }

  .select__single-value {
    margin: 0;
    position: static;
    top: auto;
    transform: none;
    font-size: ${getRem(16)};
    line-height: ${getRem(20)};
    & + div {
      padding: 0;
      margin: 0;
    }
  }

  .select__dropdown-indicator {
    padding-right: 14px;
    color: ${(props) => props.theme.colors.text.globalText};
  }

  .select__indicator-separator {
    display: none;
  }
`;
