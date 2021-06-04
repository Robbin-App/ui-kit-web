import 'styled-components';
import { IBaseRobbinTheme } from './theme';

declare module 'styled-components' {
  export type DefaultTheme = IBaseRobbinTheme;
}
