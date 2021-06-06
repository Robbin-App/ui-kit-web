import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { FormSelect, IFormSelectProps } from './index';

export default {
  title: 'Components/Form Select',
  component: FormSelect,
} as Meta;

const Template: Story<IFormSelectProps> = (args) => {
  const [value, setValue] = useState<string>(`${args.value}`);
  return (
    <FormSelect
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const options = [
  {
    label: 'Seleccionar opción',
    value: '',
    disabled: true,
  },
  {
    label: 'Opción 1',
    value: '1',
  },
  {
    label: 'Opción 2',
    value: '2',
  },
  {
    label: 'Opción 3',
    value: '3',
  },
];

export const Default = Template.bind({});
Default.args = {
  value: '',
  label: 'Label',
  formId: 'select-id',
  options,
};

export const Filled = Template.bind({});
Filled.args = {
  value: '3',
  label: 'Label',
  formId: 'select-id',
  options,
};

export const Error = Template.bind({});
Error.args = {
  value: '3',
  label: 'Label',
  formId: 'select-id',
  options,
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: '3',
  label: 'Label',
  formId: 'select-id',
  options,
  disabled: true,
};
