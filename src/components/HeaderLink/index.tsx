import React from 'react';
import styled from 'styled-components';
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { getRem } from '../../helpers';

export interface IHeaderLinkProps {
  /**
   * HeaderLink label
   */
  label: string;
  /**
   * HeaderLink Icon
   */
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  /**
   * HeaderLink active state
   */
  active?: boolean;
}

/**
 * Basic Header Link Component
 */
export const HeaderLink: React.FunctionComponent<IHeaderLinkProps> = ({
  label,
  active,
  icon: Icon,
}) => (
  <Container active={active}>
    <Icon />
    <span>{label}</span>
  </Container>
);

const Container = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  span,
  svg {
    transition: all 0.2s ease-in-out;
    color: ${(props) =>
      props.active
        ? props.theme.colors.primary100
        : props.theme.colors.text.globalText};
  }
  &:hover {
    border-bottom-color: ${(props) =>
      props.active
        ? props.theme.colors.primary100
        : props.theme.colors.text.globalText};
  }
  span {
    display: block;
    font-size: ${getRem(16)};
    line-height: ${getRem(22)};
    font-weight: ${(props) => props.theme.fonts.weight.bold};
  }
  svg {
    display: block;
    margin-right: 4px;
  }
`;
