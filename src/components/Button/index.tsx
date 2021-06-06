import React from 'react';
import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { getRem } from '../../helpers';

export interface IButtonProps {
  /**
   * Color of the Button
   */
  color: 'primary' | 'secondary';
  /**
   * Style of the Button
   */
  buttonStyle: 'solid' | 'outline';
  /**
   * Button contents
   */
  label: string;
  /**
   * Display loading indicator
   */
  loading?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Basic Button Component
 */
export const Button: React.FC<
  IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  color = 'primary',
  buttonStyle = 'solid',
  label,
  className,
  loading = false,
  ...props
}) => (
  <StyledButton
    color={color}
    className={[className, buttonStyle].join(' ')}
    {...props}
  >
    {!loading ? label : <Loader type="ThreeDots" height={13} />}
  </StyledButton>
);

const buttonStyle = css<{ color: 'primary' | 'secondary' }>`
  color: ${({ theme }) => theme.colors.white};
  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
  background-color: ${({ theme, color }) => theme.colors[`${color}100`]};
  border: 2px solid ${({ theme, color }) => theme.colors[`${color}100`]};
  &.solid,
  &.outline {
    &:hover {
      background-color: ${({ theme, color }) => theme.colors[`${color}90`]};
      border-color: ${({ theme, color }) => theme.colors[`${color}90`]};
    }
    &:active {
      background-color: ${({ theme, color }) => theme.colors[`${color}200`]};
      border-color: ${({ theme, color }) => theme.colors[`${color}200`]};
    }
  }
  &.outline {
    color: ${({ theme, color }) => theme.colors[`${color}100`]};
    svg {
      fill: ${({ theme, color }) => theme.colors[`${color}100`]};
    }
    background-color: transparent;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.white};
      svg {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const StyledButton = styled.button<{ color: 'primary' | 'secondary' }>`
  display: block;
  width: 100%;
  cursor: pointer;
  border: 0;
  padding: 10px 24px;
  font-size: ${getRem(16)};
  line-height: ${getRem(16)};
  font-weight: ${(props) => props.theme.fonts.weight.semiBold};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  transition: all 0.2s ease-in-out;
  text-align: center;
  ${buttonStyle};
`;
