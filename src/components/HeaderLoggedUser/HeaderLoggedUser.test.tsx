import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { baseRobbinTheme } from '../../styles';
import { HeaderLoggedUser } from './index';

const renderPropComponent = (theme) => (
  <ThemeProvider theme={theme}>
    <HeaderLoggedUser
      name="lego"
      avatar="https://randomuser.me/api/portraits/lego/1.jpg"
    />
  </ThemeProvider>
);

describe('HeaderLoggedUser', () => {
  test('renders normal', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme, { type: 'normal' }))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
