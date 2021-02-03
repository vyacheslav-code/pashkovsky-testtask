import {action, computed, observable} from "mobx";
import { TaskModel } from "src/model/task.model";

export class TodoList {
    @observable.shallow list: TaskModel[] = [];

    @action
    fetchList = async () => {
        const response = await fetch('/api/tasks');
        const data = await response.json();

        this.list = data;
    }

    @action
    addTodo = (text: string) => {
        
    }

    @action
    removeTodo = (todo: TaskModel) => {
        
    };

    @computed
    get finishedTasks(): TaskModel[] {
        return this.list.filter(task => task.isComplete);
    }

    @computed
    get openTasks(): TaskModel[] {
        return this.list.filter(task => !task.isComplete);
    }
}