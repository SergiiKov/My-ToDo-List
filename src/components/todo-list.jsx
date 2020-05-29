import React from 'react';

import './todo-list.styles.scss';

import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => {

    const elements = todos.map((item)=>{
        const { id, ...itemProps } = item;
     return (  
        <li key={id} className='list-group-item'>
            <TodoListItem {...itemProps} />
        </li>
    );
});
 
    return(
        <div>
            <ul className='list-group todo-list'>
                {elements}
            </ul>
    </div>
    );
}

export default TodoList;