import React from 'react';
import { Meta, Story } from '@storybook/react';
import { defaultProps } from './Header.test';
import { IHeaderProps, Header } from './index';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = defaultProps;
