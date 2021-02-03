import React from 'react';
import styled from 'styled-components';

type Props = {
    primary: boolean;
};

const StyledTitle = styled.p`
    font-size: ${(props: Props) =>
        props.primary ? 'var(--font-size-l)' : 'var(--font-size-s)'};
    color: var(--color-dark-grey);
    margin: 0;
    margin-bottom: var(--padding-s);
    margin-left: var(--padding-s);
`;

const Button: React.FC<Props> = ({ primary, children }) => (
    <StyledTitle primary={primary}>{children}</StyledTitle>
);

export default Button;
