import React from 'react';
import styled from 'styled-components';
import { getRem } from '../../helpers';

export interface ISchoolSelectorProps {
  /**
   * School name
   */
  name: string;
  /**
   * School logo url
   */
  logoSrc: string;
  /**
   * School logo alt text
   */
  logoAlt: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * School selector selected state
   */
  selected?: boolean;
}

/**
 *  School Selector Component
 */
export const SchoolSelector: React.FunctionComponent<
  ISchoolSelectorProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ name, logoSrc, logoAlt, selected, ...props }) => (
  <Container selected={selected} {...props}>
    <div>
      <img src={logoSrc} alt={logoAlt} />
    </div>
    <span>{name}</span>
  </Container>
);

const Container = styled.button<{ selected?: boolean }>`
  cursor: pointer;
  padding: 18px 16px 18px 23px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.global};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  transition: box-shadow 0.2s ease-in;
  border: 2px solid
    ${(props) =>
      props.selected ? props.theme.colors.primary90 : props.theme.colors.white};
  &:hover {
    box-shadow: ${(props) => props.theme.shadows.globalHover};
  }
  &:focus {
    outline: none;
    box-shadow: ${(props) => props.theme.shadows.focus};
  }
  &:active {
    box-shadow: ${(props) => props.theme.shadows.active};
  }
  & > div {
    padding-right: 10px;
    margin-right: 16px;
    border-right: 1px solid ${(props) => props.theme.colors.border.lightBorder};
    width: 112px;
    img {
      max-width: 100%;
    }
  }
  span {
    display: block;
    text-align: left;
    color: ${(props) => props.theme.colors.text.globalText};
    font-size: ${getRem(16)};
    line-height: ${getRem(18)};
  }
`;
