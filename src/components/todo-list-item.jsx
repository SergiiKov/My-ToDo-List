import React from 'react';

import './todo-list-item.styles.scss';

const TodoListItem = ({ label, important = false }) => {
    const styleList = {
        color: important ? 'red' : 'black'
    };
    return(
    <span className='todo-list-item' style={styleList}>{ label }</span>
    );
};

export default TodoListItem;