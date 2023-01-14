import styled, { css } from 'styled-components';

interface BadgeProps {
  variant?: 'primary' | 'secondary';
}

export const Badge = styled.button<BadgeProps>`
  all: unset;
  padding: 0.5rem 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ variant }) => css`
    background-color: ${variant === 'secondary' ? '#374151' : '#F3F4F6'};
    color: ${variant === 'secondary' ? '#fff' : '#374151'};
    border-radius: ${variant === 'secondary' ? '1rem' : '0.25rem'};
  `};
`;
