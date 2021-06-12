import React from 'react';
import { Meta, Story } from '@storybook/react';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { LogoType } from '../Logo';
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
      renderIcon: () => <WorkOutlineIcon />,
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
      renderIcon: () => <NotificationsNoneOutlinedIcon />,
    },
  ],
  pathname: '/',
  userFirstName: 'John',
  userLastName: 'Doe',
};
