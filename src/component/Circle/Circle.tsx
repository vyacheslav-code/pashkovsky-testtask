import React from 'react';
import styled from 'styled-components';

type Props = {
    onClick: () => void;
    fill: boolean;
};

const StyledCircle = styled.div`
    border-radius: 50%;
    border: 2px solid var(--color-primary);
    width: var(--padding-m);
    height: var(--padding-m);
    background: ${({ fill }: Props) =>
        fill
            ? 'radial-gradient(circle, var(--color-primary) 60%, white 40%)'
            : 'white'};
`;

const Circle: React.FC<Props> = ({ fill, onClick }) => (
    <StyledCircle onClick={onClick} fill={fill} />
);

export default Circle;
