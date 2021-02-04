import React from 'react';
import styled from 'styled-components';

type Props = {
    primary: boolean;
};

const StyledTitle = styled.p`
    font-size: ${(props: Props) =>
        props.primary ? 'var(--font-size-l)' : 'var(--font-size-s)'};
    color: var(--color-dark-grey);
    margin: var(--padding-s);
`;

const Button: React.FC<Props> = ({ primary, children }) => (
    <StyledTitle primary={primary}>{children}</StyledTitle>
);

export default Button;
