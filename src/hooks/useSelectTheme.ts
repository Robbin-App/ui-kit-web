import { useTheme } from 'styled-components';
import { Theme } from 'react-select';
import { IBaseRobbinTheme } from '../styles';

interface IUseSelectTheme {
  getTheme(theme: Theme): Theme;
}

const useSelectTheme = (): IUseSelectTheme => {
  const { colors } = useTheme() as IBaseRobbinTheme;
  const getTheme = (theme: Theme): Theme => ({
    ...theme,
    borderRadius: 8,
    colors: {
      ...theme.colors,
      primary: colors.primary100,
      neutral20: colors.border.lightBorder,
      neutral30: colors.border.lightBorder,
      neutral50: colors.text.globalText,
      neutral60: colors.text.globalText,
      neutral80: colors.text.globalText,
    },
  });
  return {
    getTheme,
  };
};

export default useSelectTheme;
