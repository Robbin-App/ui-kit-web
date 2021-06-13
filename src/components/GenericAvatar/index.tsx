import React from 'react';
import styled from 'styled-components';
import { PersonOutlinedIcon } from '../../icons';

export interface IGenericAvatarProps {
  /**
   * String to be shown jf theres no image id (JD)
   */
  children?: string;
}

/**
 * Generic Avatar Component
 */
export const GenericAvatar: React.FunctionComponent<IGenericAvatarProps> = ({
  children,
}) => (
  <Container>
    {children ? <span>{children}</span> : <PersonOutlinedIcon />}
  </Container>
);

const Container = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.greySurface};

  span {
    color: ${(props) => props.theme.colors.text.globalText};
    font-weight: ${(props) => props.theme.fonts.weight.bold};
  }
`;
