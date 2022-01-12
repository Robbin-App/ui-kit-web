import React from 'react';
import ReactSelect, { Props } from 'react-select';
import {
  BaseSelectContainer,
  IBaseSelectContainerProps,
} from '../BaseSelectContainer';
import useSelectTheme from '../../hooks/useSelectTheme';

export type ISelectProps = Props & IBaseSelectContainerProps;

export const Select: React.FunctionComponent<ISelectProps> = ({
  label,
  formId,
  error,
  placeholder,
  ...props
}) => {
  const { getTheme } = useSelectTheme();
  return (
    <BaseSelectContainer {...{ label, formId, error }}>
      <ReactSelect
        {...props}
        placeholder={placeholder}
        inputId={formId}
        classNamePrefix="select"
        theme={getTheme}
      />
      {error && <small>{error}</small>}
    </BaseSelectContainer>
  );
};
