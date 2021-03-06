import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { baseRobbinTheme } from '../../styles';
import { WorkOutlinedIcon } from '../../icons';
import { HeaderLink } from './index';

const renderPropComponent = (theme) => (
  <ThemeProvider theme={theme}>
    <HeaderLink label="test label" renderIcon={() => <WorkOutlinedIcon />} />
  </ThemeProvider>
);

describe('HeaderLink', () => {
  test('renders', () => {
    const render = renderer
      .create(renderPropComponent(baseRobbinTheme))
      .toJSON();
    expect(render).toMatchSnapshot();
  });
});
