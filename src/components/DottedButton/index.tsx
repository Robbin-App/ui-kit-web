import React from 'react';
import styled from 'styled-components';
import { getRem } from '../../helpers';

export interface IDottedButtonProps {
  /**
   * Label of the dotted button
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Render as full width
   */
  fullWidth?: boolean;
}

/**
 * Basic Dotted Button Component
 */
export const DottedButton: React.FunctionComponent<
  IDottedButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label, fullWidth = false, ...props }) => (
  <StyledButton {...props} fullWidth={fullWidth}>
    {label}
  </StyledButton>
);

const StyledButton = styled.button<{ fullWidth?: boolean }>`
  background: ${(props) => props.theme.colors.greySurface};
  border: 1px dashed ${(props) => props.theme.colors.border.lightBorder};
  cursor: pointer;
  font-style: normal;
  color: ${(props) => props.theme.colors.text.globalText};
  font-size: ${getRem(16)};
  line-height: ${getRem(16)};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  padding: 10px 24px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`;
