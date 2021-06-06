import React from 'react';
import LogoNormal from './LogoNormal';
import LogoTalentosBig from './LogoTalentosBig';
import LogoEmpresasBig from './LogoEmpresasBig';
import LogoTalentosNormal from './LogoTalentosNormal';
import LogoEmpresasNormal from './LogoEmpresasNormal';

export interface ILogoProps {
  /**
   * Logo Types
   */
  type:
    | 'normal'
    | 'talentos-big'
    | 'empresas-big'
    | 'talentos-normal'
    | 'empresas-normal';
}

/**
 * Global Logo Component
 */
export const Logo: React.FunctionComponent<ILogoProps> = ({ type }) => (
  <>
    {type === 'normal' && <LogoNormal />}
    {type === 'talentos-big' && <LogoTalentosBig />}
    {type === 'empresas-big' && <LogoEmpresasBig />}
    {type === 'talentos-normal' && <LogoTalentosNormal />}
    {type === 'empresas-normal' && <LogoEmpresasNormal />}
  </>
);
