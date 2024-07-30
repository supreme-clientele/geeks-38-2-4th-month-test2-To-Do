import React, { useState } from 'react';
import Todo from '../../components/todo/Todo';
import TodoList from '../../components/todolist/TodoList';
import TodoPage from '../../components/todopage/TodoPage';
import classes from './MainPage.module.scss';

const MainPage = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleClearAll = () => {
        setTasks([]);
    };

    const handleEditTask = (index, newTask) => {
        const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className={`${classes.mainPage} ${tasks.length === 0 ? classes.mainPageEmpty : ''}`}>
            <h1 className={classes.title}>TO DO</h1>
            <div className={classes.todoContainer}>
                <Todo
                    task={task}
                    onInputChange={handleInputChange}
                    onAddTask={handleAddTask}
                    onClearAll={handleClearAll}
                    hasTasks={tasks.length > 0}
                />
                {tasks.length > 0 ? (
                    <div className={classes.todoListContainer}>
                        <TodoList
                            tasks={tasks}
                            onEditTask={handleEditTask}
                            onDeleteTask={handleDeleteTask}
                        />
                    </div>
                ) : (
                    <div className={classes.todoPageContainer}>
                        <TodoPage tasks={tasks} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;
