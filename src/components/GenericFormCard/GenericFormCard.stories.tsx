import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GenericFormCard, IGenericFormCardProps } from './index';

export default {
  title: 'Components/Generic Form Card',
  component: GenericFormCard,
} as Meta;

const Template: Story<IGenericFormCardProps> = (args) => (
  <GenericFormCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Editar Información',
};
