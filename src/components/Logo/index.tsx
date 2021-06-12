import React from 'react';
import LogoNormal from './LogoNormal';
import LogoTalentosBig from './LogoTalentosBig';
import LogoEmpresasBig from './LogoEmpresasBig';
import LogoTalentosNormal from './LogoTalentosNormal';
import LogoEmpresasNormal from './LogoEmpresasNormal';

export enum LogoType {
  Normal = 'normal',
  TalentosBig = 'talentos-big',
  EmpresasBig = 'empresas-big',
  TalentosNormal = 'talentos-normal',
  EmpresasNormal = 'empresas-normal',
}

export interface ILogoProps {
  /**
   * Logo Types
   */
  type: LogoType;
}

/**
 * Global Logo Component
 */
export const Logo: React.FunctionComponent<ILogoProps> = ({ type }) => (
  <>
    {type === LogoType.Normal && <LogoNormal />}
    {type === LogoType.TalentosBig && <LogoTalentosBig />}
    {type === LogoType.EmpresasBig && <LogoEmpresasBig />}
    {type === LogoType.TalentosNormal && <LogoTalentosNormal />}
    {type === LogoType.EmpresasNormal && <LogoEmpresasNormal />}
  </>
);
