import React from 'react';

const TodoList = () => {
    const items = ['Learn React', 'Build App']
    return(
        <div>
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    </div>
    );
}

export default TodoList;