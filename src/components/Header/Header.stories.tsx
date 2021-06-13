import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LogoType } from '../Logo';
import { WorkOutlinedIcon } from '../../icons/WorkOutlinedIcon';
import { DescriptionOutlinedIcon } from '../../icons/DescriptionOutlinedIcon';
import { NotificationsNoneOutlinedIcon } from '../../icons/NotificationsNoneOutlinedIcon';
import { PersonOutlinedIcon } from '../../icons/PersonOutlinedIcon';
import { IHeaderProps, Header } from './index';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoType: LogoType.TalentosNormal,
  navItems: [
    {
      label: 'Oportunidades',
      href: '/',
      // eslint-disable-next-line react/display-name
      renderIcon: () => <WorkOutlinedIcon />,
    },
    {
      label: 'Aplicaciones',
      href: '/applications',
      // eslint-disable-next-line react/display-name
      renderIcon: () => <DescriptionOutlinedIcon />,
    },
    {
      label: 'Notificaciones',
      href: '/notifications',
      // eslint-disable-next-line react/display-name
      renderIcon: () => <NotificationsNoneOutlinedIcon />,
    },
    {
      label: 'Editar Perfil',
      href: '/edit-profile',
      // eslint-disable-next-line react/display-name
      renderIcon: () => <PersonOutlinedIcon />,
    },
  ],
  pathname: '/',
  userFirstName: 'John',
  userLastName: 'Doe',
};
