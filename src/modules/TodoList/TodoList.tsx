import React, { useEffect } from 'react';
import Title from '../../component/Title';
import TodoItem from './components/TodoItem';
import { useStore } from '../../store/helpers';
import { observer } from 'mobx-react-lite';

const TodoList = () => {
    const {
        openTasks,
        finishedTasks,
        fetchList,
        toggle,
        removeTodo
    } = useStore();
    useEffect(() => {
        fetchList();
    }, []);

    return (
        <>
            <Title primary={false}>In Progress</Title>
            {openTasks.map(({ body, isComplete, id }, idx) => (
                <TodoItem
                    id={id}
                    key={body + idx}
                    title={body}
                    completed={isComplete}
                    toggle={toggle}
                    removeTodo={removeTodo}
                />
            ))}
            <Title primary={false}>Finished</Title>
            {finishedTasks.map(({ body, isComplete, id }, idx) => (
                <TodoItem
                    id={id}
                    key={body + idx}
                    title={body}
                    completed={isComplete}
                    toggle={toggle}
                    removeTodo={removeTodo}
                />
            ))}
        </>
    );
};

export default observer(TodoList);
