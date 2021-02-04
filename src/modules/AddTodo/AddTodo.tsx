import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../component/Input';
import Button from '../../component/Button';
import { useStore } from '../../store/helpers';
import { observer } from 'mobx-react-lite';

const StyledAddContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const AddTodo = () => {
    const [inputValue, setInputValue] = useState('');
    const { addTodo } = useStore();

    const handleAddTodo = () => {
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <StyledAddContainer>
            <Input
                onChange={(evt) => {
                    setInputValue(evt.target.value);
                }}
                value={inputValue}
                placeholder="Add new todo..."
            />
            <Button
                onClick={handleAddTodo}
                title="Add"
                disabled={!inputValue.length}
            />
        </StyledAddContainer>
    );
};

export default observer(AddTodo);
