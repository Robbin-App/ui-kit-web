import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeaderLoggedUser, IHeaderLoggedUserProps } from './index';

export default {
  title: 'Components/Header Logged User',
  component: HeaderLoggedUser,
} as Meta;

const Template: Story<IHeaderLoggedUserProps> = (args) => (
  <HeaderLoggedUser {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Friendly Lego',
  avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
};
