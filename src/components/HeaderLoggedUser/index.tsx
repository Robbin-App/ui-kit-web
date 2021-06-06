import React from 'react';
import styled from 'styled-components';
import { getRem } from '../../helpers';

export interface IHeaderLoggedUserProps {
  /**
   * Logged user name
   */
  name: string;
  /**
   * Logged user avatar url
   */
  avatar: string;
}

/**
 *
 */
export const HeaderLoggedUser: React.FunctionComponent<IHeaderLoggedUserProps> =
  ({ name, avatar }) => (
    <Container>
      <img
        src={avatar}
        alt={`${name}`}
        width="24"
        height="24"
        draggable={false}
      />
      <span id="logged-user">{name}</span>
    </Container>
  );

const Container = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 100%;
    object-fit: cover;
    margin-right: 8px;
  }
  span {
    display: block;
    font-size: ${getRem(16)};
    line-height: ${getRem(18)};
    color: ${(props) => props.theme.colors.text.globalText};
  }
`;
