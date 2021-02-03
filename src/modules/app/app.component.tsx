import * as React from 'react';
import { TodoList } from '../../store';
import { StoreProvider } from '../../store/helpers';
import Container from '../../component/Container';
import Title from '../../component/Title';
import AddTodo from '../../modules/AddTodo';
import TodoListComponent from '../../modules/TodoList';
import './styles.scss';

const store = new TodoList();

export const App: React.FC = () => {
    return (
        <StoreProvider value={store}>
            <Container>
                <Title primary>ToDo List</Title>
                <AddTodo />
                <TodoListComponent />
            </Container>
        </StoreProvider>
    );
};
