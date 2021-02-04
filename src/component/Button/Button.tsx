import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: var(--padding-s);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    font-size: var(--font-size-m);
    color: var(--color-white);
    background: var(--color-primary);
    border: none;
    &:active,
    &:focus {
        outline: none;
    }
    &:disabled {
        cursor: not-allowed;
    }
`;

type Props = {
    onClick: () => void;
    title: string;
    disabled: boolean;
};

const Button: React.FC<Props> = ({ onClick, title, disabled }) => (
    <StyledButton onClick={onClick} disabled={disabled}>
        {title}
    </StyledButton>
);

export default Button;
