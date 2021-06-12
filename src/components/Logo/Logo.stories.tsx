import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ILogoProps, Logo, LogoType } from './index';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

const Template: Story<ILogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: LogoType.Normal,
};

export const EmpresasBig = Template.bind({});
EmpresasBig.args = {
  type: LogoType.EmpresasBig,
};

export const EmpresasNormal = Template.bind({});
EmpresasNormal.args = {
  type: LogoType.EmpresasNormal,
};

export const TalentosBig = Template.bind({});
TalentosBig.args = {
  type: LogoType.TalentosBig,
};

export const TalentosNormal = Template.bind({});
TalentosNormal.args = {
  type: LogoType.TalentosNormal,
};
