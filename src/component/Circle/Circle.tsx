import React from 'react';
import styled from 'styled-components';

type Props = {
    onClick: () => void;
    fill: boolean;
};

const StyledCircle = styled.div`
    border-radius: 50%;
    width: var(--padding-m);
    height: var(--padding-m);
    background-color: ${({ fill }: Props) =>
        fill
            ? 'radial-gradient(white 10%, var(--color-primary) 90%)'
            : 'white'};
`;

const Circle: React.FC<Props> = ({ fill, onClick }) => (
    <StyledCircle onClick={onClick} fill={fill} />
);

export default Circle;