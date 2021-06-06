import React from 'react';
import styled from 'styled-components';
import { getRem } from '../../helpers';

export interface IGenericFormCardProps {
  /**
   * Form container title
   */
  title: string;
}

/**
 * Generic form container card
 */
export const GenericFormCard: React.FunctionComponent<IGenericFormCardProps> =
  ({ title, children }) => (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );

const Container = styled.div`
  padding: 22px 22px 24px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.global};
  h2 {
    margin: 0 0 18px;
    font-size: ${getRem(18)};
    line-height: ${getRem(20)};
    font-weight: ${(props) => props.theme.fonts.weight.bold};
  }
`;
