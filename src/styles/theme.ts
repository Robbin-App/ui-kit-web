import { DefaultTheme } from 'styled-components';

export interface IBaseRobbinTheme {
  colors: {
    primary100: string;
    secondary100: string;
    text: {
      headingText: string;
      globalText: string;
      disabledText: string;
    };
    border: {
      darkBorder: string;
      lightBorder: string;
    };
    white: string;
    greySurface: string;
  };
  fonts: {
    nunito: string;
  };
  sizes: {
    containerMaxWidth: number;
  };
}

export const baseRobbinTheme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    greySurface: '#FAFAFA',
    primary100: '#15456F',
    secondary100: '#4677AF',
    border: {
      lightBorder: '#E7E6E6',
      darkBorder: '#D6D6D6',
    },
    text: {
      headingText: '#2E2E2E',
      globalText: '#545454',
      disabledText: '#A1A1A1',
    },
  },
  fonts: {
    nunito: `'Nunito', sans-serif`,
  },
  sizes: {
    containerMaxWidth: 1230,
  },
};
