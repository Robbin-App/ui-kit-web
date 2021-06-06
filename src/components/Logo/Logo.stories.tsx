import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ILogoProps, Logo } from './index';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

const Template: Story<ILogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'normal',
};

export const EmpresasBig = Template.bind({});
EmpresasBig.args = {
  type: 'empresas-big',
};

export const EmpresasNormal = Template.bind({});
EmpresasNormal.args = {
  type: 'empresas-normal',
};

export const TalentosBig = Template.bind({});
TalentosBig.args = {
  type: 'talentos-big',
};

export const TalentosNormal = Template.bind({});
TalentosNormal.args = {
  type: 'talentos-normal',
};
