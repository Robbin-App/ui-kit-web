import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DottedButton, IDottedButtonProps } from './index';

export default {
  title: 'Components/Dotted Button',
  component: DottedButton,
} as Meta;

const Template: Story<IDottedButtonProps> = (args) => (
  <DottedButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Dotted Label',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Dotted Label',
  fullWidth: true,
};
