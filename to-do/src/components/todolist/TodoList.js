import React, { useState } from 'react';
import classes from './TodoList.module.scss';

const TodoList = ({ tasks, onEditTask, onDeleteTask }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditValue(tasks[index]);
    };

    const handleSaveClick = () => {
        onEditTask(editIndex, editValue);
        setEditIndex(null);
        setEditValue('');
    };

    const handleCancelClick = () => {
        setEditIndex(null);
        setEditValue('');
    };

    return (
        <div className={classes.todoList}>
            {tasks.map((task, index) => (
                <div key={index} className={classes.taskItem}>
                    {editIndex === index ? (
                        <>
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                className={classes.taskInput}
                            />
                            <button className={classes.saveButton} onClick={handleSaveClick}>Save</button>
                            <button className={classes.cancelButton} onClick={handleCancelClick}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                value={task}
                                className={classes.taskInput}
                                readOnly
                            />
                            <button className={classes.editButton} onClick={() => handleEditClick(index)}>✏️</button>
                            <button className={classes.deleteButton} onClick={() => onDeleteTask(index)}>🗑️</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TodoList;
