import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { baseRobbinTheme } from '../../styles';
import { ILogoProps, Logo, LogoType } from './index';

const renderPropComponent = (theme, props: ILogoProps) => (
  <ThemeProvider theme={theme}>
    <Logo {...props} />
  </ThemeProvider>
);

describe('Logo', () => {
  test('renders normal', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme, { type: LogoType.Normal }))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
  test('renders talentos-big', () => {
    const render = renderer
      .create(
        renderPropComponent(baseRobbinTheme, { type: LogoType.TalentosBig })
      )
      .toJSON();
    expect(render).toMatchSnapshot();
  });
  test('renders talentos-normal', () => {
    const render = renderer
      .create(
        renderPropComponent(baseRobbinTheme, { type: LogoType.TalentosNormal })
      )
      .toJSON();
    expect(render).toMatchSnapshot();
  });
  test('renders empresas-big', () => {
    const render = renderer
      .create(
        renderPropComponent(baseRobbinTheme, { type: LogoType.EmpresasBig })
      )
      .toJSON();
    expect(render).toMatchSnapshot();
  });
  test('renders empresas-normal', () => {
    const render = renderer
      .create(
        renderPropComponent(baseRobbinTheme, { type: LogoType.EmpresasNormal })
      )
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
