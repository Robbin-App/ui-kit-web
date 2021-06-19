import React from 'react';
import { Meta, Story } from '@storybook/react';
import FormInput from '../FormInput';
import { ISelectProps, Select } from './index';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: Story<ISelectProps> = (args) => (
  <div style={{ height: '200px', display: 'flex' }}>
    <Select {...args} />
    <FormInput label="test" formId="test" />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Género',
  formId: 'select-id',
  placeholder: '¿Cómo te identificas?',
  options: [
    { value: 'female', label: 'Mujer' },
    { value: 'male', label: 'Hombre' },
    { value: 'other', label: 'Otro' },
  ],
};

export const Error = Template.bind({});
Error.args = {
  label: 'Género',
  formId: 'select-id',
  placeholder: '¿Cómo te identificas?',
  error: 'Mensaje de error',
  options: [
    { value: 'female', label: 'Mujer' },
    { value: 'male', label: 'Hombre' },
    { value: 'other', label: 'Otro' },
  ],
};
