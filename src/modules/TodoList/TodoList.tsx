import React, {useEffect} from 'react';
import Title from '../../component/Title';
import TodoItem from './components/TodoItem';
import { useStore } from '../../store/helpers';
import { observer } from 'mobx-react-lite';

const TodoList = () => {
    const { openTasks, finishedTasks, fetchList } = useStore();
    useEffect(() => { fetchList() }, []);
    
    return (
        <>
            <Title primary={false}>In Progress</Title>
            {openTasks.map(({ body, isComplete }, idx) => (
                <TodoItem
                    key={body + idx}
                    title={body}
                    completed={isComplete}
                />
            ))}
            <Title primary={false}>Finished</Title>
            {finishedTasks.map(({ body, isComplete }, idx) => (
                <TodoItem
                    key={body + idx}
                    title={body}
                    completed={isComplete}
                />
            ))}
        </>
    );
};

export default observer(TodoList);