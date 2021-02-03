import React from 'react';
import styled from 'styled-components';
import Circle from '../../../component/Circle';
import DeleteIcon from '../../../component/DeleteIcon';

type Props = {
    title?: string;
    completed: boolean;
};

const StyledToDoItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--padding-s);
`;

const StyledToDoTitle = styled.p`
    color: var(--color-dark-grey);
    font-size: var(--font-size-s);
    text-decoration: ${({ completed }: Props) =>
        completed ? 'line-through' : 'none'};
`;

const TodoItem: React.FC<Props> = ({ title, completed }) => (
    <StyledToDoItem>
        <Circle onClick={() => {}} fill={completed} />
        <StyledToDoTitle completed={completed}>{title}</StyledToDoTitle>
        <DeleteIcon onClick={() => {}} />
    </StyledToDoItem>
);

export default TodoItem;
