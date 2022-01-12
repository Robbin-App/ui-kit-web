import React from 'react';
import { Meta, Story } from '@storybook/react';
import { OptionTypeBase } from 'react-select';
import { AsyncSelect, ISelectAsyncProps } from './index';

export default {
  title: 'Components/Async Select',
  component: AsyncSelect,
} as Meta;

const Template: Story<ISelectAsyncProps> = (args) => {
  const filterColors = (inputValue: string): OptionTypeBase[] => {
    return args.options?.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    ) as OptionTypeBase[];
  };
  const promiseOptions = (inputValue): Promise<OptionTypeBase[]> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  return (
    <div style={{ height: '200px' }}>
      <AsyncSelect {...args} loadOptions={promiseOptions} defaultOptions />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Género',
  formId: 'select-id',
  placeholder: '¿Cómo te identificas?',
  loadingMessage: () => 'Buscando...',
  noOptionsMessage: () => 'No encontramos coincidencias',
  options: [
    { value: 'female', label: 'Mujer' },
    { value: 'male', label: 'Hombre' },
    { value: 'other', label: 'Otro' },
  ],
};
