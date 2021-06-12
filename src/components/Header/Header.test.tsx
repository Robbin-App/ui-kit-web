import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
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
