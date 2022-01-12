import React from 'react';
import ReactSelect, { Props } from 'react-select/async';
import {
  BaseSelectContainer,
  IBaseSelectContainerProps,
} from '../BaseSelectContainer';
import useSelectTheme from '../../hooks/useSelectTheme';

export type ISelectAsyncProps = Props<any, any, any> &
  IBaseSelectContainerProps;

/**
 * Basic react-select async component
 */
export const AsyncSelect: React.FunctionComponent<ISelectAsyncProps> = ({
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
