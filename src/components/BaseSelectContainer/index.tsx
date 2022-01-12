import React from 'react';
import styled from 'styled-components';
import { getRem } from '../../helpers';

export interface IBaseSelectContainerProps {
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
}

export const BaseSelectContainer: React.FunctionComponent<IBaseSelectContainerProps> =
  ({ label, formId, error, children }) => (
    <Container error={error}>
      <label htmlFor={formId}>{label}</label>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );

export const Container = styled.div<{ error?: string | boolean }>`
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
  }

  .select__single-value {
    margin: 0;
    position: static;
    top: auto;
    transform: none;
    font-size: ${getRem(16)};
    line-height: ${getRem(20)};
  }

  [class$='-Input'] {
    padding: 0;
    margin: 0;
  }

  .select__dropdown-indicator {
    padding-right: 14px;
    color: ${(props) => props.theme.colors.text.globalText};
  }

  .select__indicator-separator {
    display: none;
  }
`;
