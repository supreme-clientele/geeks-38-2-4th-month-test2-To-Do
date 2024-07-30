import React from 'react';
import classes from './Todo.module.scss';

const Todo = ({ task, onInputChange, onAddTask, onClearAll, hasTasks }) => {
    return (
        <div className={classes.todo}>
            <div className={classes.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter a task"
                    className={classes.input}
                    value={task}
                    onChange={onInputChange}
                />
                <button className={classes.addButton} onClick={onAddTask}>Add task</button>
                {hasTasks && (
                    <button className={classes.clearButton} onClick={onClearAll}>Clear all</button>
                )}
            </div>
        </div>
    );
};

export default Todo;
