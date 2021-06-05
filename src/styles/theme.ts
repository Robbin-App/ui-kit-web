export interface IBaseRobbinTheme {
  colors: {
    primary90: string;
    primary100: string;
    primary200: string;
    secondary90: string;
    secondary100: string;
    secondary200: string;
    error: string;
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
    weight: {
      light: number;
      regular: number;
      semiBold: number;
      bold: number;
      extraBold: number;
    };
  };
  sizes: {
    containerMaxWidth: number;
    borderRadius: string;
  };
}

export const baseRobbinTheme: IBaseRobbinTheme = {
  colors: {
    white: '#ffffff',
    greySurface: '#FAFAFA',
    primary90: '#1A5589',
    primary100: '#15456F',
    primary200: '#133D63',
    secondary90: '#5081B9',
    secondary100: '#4677AF',
    secondary200: '#426FA4',
    error: '#A62121',
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
    weight: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  sizes: {
    containerMaxWidth: 1230,
    borderRadius: '8px',
  },
};
