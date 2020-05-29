import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
 
    return(
        <div>
        <ul>
            <li><TodoListItem label='Learn React' /></li>
            <li><TodoListItem 
            label='Build App'
            important /></li>
        </ul>
    </div>
    );
}

export default TodoList;