import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { WorkOutlinedIcon } from '../../icons/WorkOutlinedIcon';
import { DescriptionOutlinedIcon } from '../../icons/DescriptionOutlinedIcon';
import { NotificationsNoneOutlinedIcon } from '../../icons/NotificationsNoneOutlinedIcon';
import { PersonOutlinedIcon } from '../../icons/PersonOutlinedIcon';
import { LogoType } from '../Logo';
import { baseRobbinTheme } from '../../styles';
import { Header } from './index';

export const defaultProps = {
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

const renderPropComponent = (theme) => (
  <ThemeProvider theme={theme}>
    <Header {...defaultProps} />
  </ThemeProvider>
);

describe('Header', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
