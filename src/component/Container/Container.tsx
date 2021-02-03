import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    padding: var(--padding-m);
    width: fit-content;
    margin: auto;
`;

const Container: React.FC = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
);

export default Container;
