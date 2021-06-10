import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FormCheckbox, IFormCheckboxProps } from './index';

export default {
  title: 'Components/Form Checkbox',
  component: FormCheckbox,
} as Meta;

const Template: Story<IFormCheckboxProps> = (args) => (
  <FormCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox label',
  formId: 'checkbox-id',
};
