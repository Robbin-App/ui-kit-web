import React from 'react';
import { Meta, Story } from '@storybook/react';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import { HeaderLink, IHeaderLinkProps } from './index';

export default {
  title: 'Components/Header Link',
  component: HeaderLink,
} as Meta;

const Template: Story<IHeaderLinkProps> = (args) => (
  <div style={{ display: 'flex' }}>
    <HeaderLink {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Oportunidades',
  icon: WorkOutlineOutlinedIcon,
};

export const Active = Template.bind({});
Active.args = {
  label: 'Oportunidades',
  icon: WorkOutlineOutlinedIcon,
  active: true,
};
