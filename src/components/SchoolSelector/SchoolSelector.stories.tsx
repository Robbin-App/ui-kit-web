import React from 'react';

import { Meta, Story } from '@storybook/react';
import { ISchoolSelectorProps, SchoolSelector } from './index';

export default {
  title: 'Components/School Selector',
  component: SchoolSelector,
} as Meta;

const Template: Story<ISchoolSelectorProps> = (args) => (
  <SchoolSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Universidad San Francisco de Quito',
  logoSrc: '/storybook-assets/school-logo.png',
  logoAlt: 'school logo',
};

export const Selected = Template.bind({});
Selected.args = {
  name: 'Universidad San Francisco de Quito',
  logoSrc: '/storybook-assets/school-logo.png',
  logoAlt: 'school logo',
  selected: true,
};
