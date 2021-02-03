import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
    fill: var(--color-danger);
`;

type Props = {
    onClick: () => void;
};

const DeleteIcon: React.FC<Props> = ({ onClick }) => (
    <StyledIcon onClick={onClick}>
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <title>spam, trash, bin, garbage, delete</title>
            <path d="M2.88,5,5.11,24H18.89L21.12,5ZM17.11,22H6.89L5.12,7H18.88Z" />
            <polygon points="21 2 15 2 15 1 13 1 13 0 11 0 11 1 9 1 9 2 3 2 3 4 21 4 21 2" />
        </svg>
    </StyledIcon>
);

export default DeleteIcon;
