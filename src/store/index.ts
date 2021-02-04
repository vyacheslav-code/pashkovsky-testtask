import { makeAutoObservable } from 'mobx';
import { TaskModel } from 'src/model/task.model';

export class TodoList {
    list: TaskModel[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    fetchList = async () => {
        const response = await fetch('/api/tasks');
        const data = await response.json();

        this.list = data;
    };

    addTodo = async (text: string) => {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({ body: text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const newTask = await response.json();

        this.list = [...this.list, newTask];
    };

    removeTodo = async (taskId: string) => {
        await fetch(`/api/tasks/${taskId}`, {
            method: 'DELETE',
        });

        this.list = this.list.filter(({ id }) => id !== taskId);
    };

    toggle = async (id: string) => {
        const taskToToggle = this.list.find((item) => item.id === id);
        const taskToUpdate = {
            ...taskToToggle,
            isComplete: !taskToToggle.isComplete,
        };

        const response = await fetch('/api/tasks', {
            method: 'PUT',
            body: JSON.stringify(taskToUpdate),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const updatedTask = await response.json();

        this.list = this.list.map((item) => {
            if (updatedTask.id === item.id) {
                return updatedTask;
            }
            return item;
        });
        console.log(this.list)
    };

    get finishedTasks(): TaskModel[] {
        return this.list.filter((task) => task.isComplete);
    }

    get openTasks(): TaskModel[] {
        return this.list.filter((task) => !task.isComplete);
    }
}
