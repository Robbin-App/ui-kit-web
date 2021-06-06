import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import { baseRobbinTheme } from '../../styles';
import { HeaderLink } from './index';

const renderPropComponent = (theme) => (
  <ThemeProvider theme={theme}>
    <HeaderLink label="test label" icon={WorkOutlineOutlinedIcon} />
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
