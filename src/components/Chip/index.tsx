import React from 'react';
import styled from 'styled-components';
import { getRem } from '../../helpers';
import { ClearIcon } from '../../icons/Clear';

export interface IChipsProps {
  /**
   * Label of the chip
   */
  label: string;
  /**
   * Display cancel icon
   */
  withClear?: boolean;
  /**
   * Click event in the close icon
   */
  onClearClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Basic Chip Component
 */
export const Chip: React.FunctionComponent<IChipsProps> = ({
  label,
  withClear = 'true',
  onClearClick,
}) => (
  <Container>
    <span>{label}</span>
    {withClear && (
      <button onClick={onClearClick} data-testid="chip-button-test-id">
        <ClearIcon />
      </button>
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 12px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.border.lightBorder};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  span {
    display: block;
    font-size: ${getRem(14)};
    line-height: ${getRem(18)};
    color: ${(props) => props.theme.colors.text.globalText};
  }
  button {
    background: transparent;
    border: none;
    padding: 0;
    width: 16px;
    height: 16px;
    margin-left: 4px;
    cursor: pointer;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
