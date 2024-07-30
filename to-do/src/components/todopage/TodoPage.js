import React from 'react';
import classes from './TodoPage.module.scss';

const TodoPage = ({ tasks }) => {
    return (
        <div className={classes.todoPage}>
            {tasks.map((task, index) => (
                <div key={index} className={classes.taskItem}>
                    <input type="text" value={task} className={classes.taskInput} readOnly />
                </div>
            ))}
        </div>
    );
};

export default TodoPage;
