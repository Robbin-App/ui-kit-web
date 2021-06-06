import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Chip, IChipsProps } from './index';

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta;

const Template: Story<IChipsProps> = (args) => (
  <div style={{ display: 'flex' }}>
    <Chip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Chip Label',
};

export const WithoutClear = Template.bind({});
WithoutClear.args = {
  label: 'Chip Label',
  withClear: false,
};
