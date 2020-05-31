import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

    const elements = todos.map((item)=>{
        const { id, ...itemProps } = item;
     return (  
        <li key={id} className='list-group-item list-group-item-primary'>
            <TodoListItem {...itemProps} 
            onDeleted={()=> onDeleted(id)}
            onToggleDone={()=> onToggleDone(id)}
            onToggleImportant={()=> onToggleImportant(id)} />
        </li>
    );
});
 
    return(
        <div>
            <ul className='list-group ml-4'>
                {elements}
            </ul>
    </div>
    );
}

export default TodoList;