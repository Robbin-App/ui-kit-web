import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, IButtonProps } from './';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => (
  <div style={{ width: '220px' }}>
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Continuar',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Continuar',
};

export const Outline = Template.bind({});
Outline.args = {
  color: 'primary',
  buttonStyle: 'outline',
  label: 'Continuar',
};

export const Loading = Template.bind({});
Loading.args = {
  color: 'primary',
  buttonStyle: 'solid',
  label: 'Continuar',
  loading: true,
};
