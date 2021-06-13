import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GenericAvatar, IGenericAvatarProps } from './index';

export default {
  title: 'Components/Generic Avatar',
  component: GenericAvatar,
} as Meta;

const Template: Story<IGenericAvatarProps> = (args) => (
  <GenericAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'JD',
};
