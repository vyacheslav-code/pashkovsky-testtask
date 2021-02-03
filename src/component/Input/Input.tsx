import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: var(--padding-s);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    font-size: var(--font-size-m);
    color: var(--color-dark-grey);
    border: none;
    margin-right: var(--padding-m);
    &::placeholder {
        color: var(--color-light-grey);
    }
    &:active, &:focus {
        outline: none;
    }
`;

type Props = {
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder: string;
};

const Input: React.FC<Props> = ({ value, onChange, placeholder }) => (
    <StyledInput value={value} onChange={onChange} placeholder={placeholder} />
);

export default Input;