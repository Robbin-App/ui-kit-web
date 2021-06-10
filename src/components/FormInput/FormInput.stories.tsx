import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import FormInput, { IFormInputProps } from './index';

export default {
  title: 'Components/Form Input',
  component: FormInput,
} as Meta;

const Template: Story<IFormInputProps & { type?: string }> = (args) => {
  const [value, setValue] = useState<string>(`${args.value}`);
  return (
    <FormInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  label: 'First Name',
  formId: 'first-name-id',
};

export const Filled = Template.bind({});
Filled.args = {
  value: 'Jhon',
  label: 'First Name',
  formId: 'first-name-id-filled',
};

export const Date = Template.bind({});
Date.args = {
  value: '',
  label: 'Date',
  formId: 'date-id',
  type: 'date',
};

export const Error = Template.bind({});
Error.args = {
  value: 'Jhon',
  label: 'First Name',
  formId: 'first-name-id-filled',
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'Jhon',
  label: 'First Name',
  formId: 'first-name-id-filled',
  disabled: true,
};
