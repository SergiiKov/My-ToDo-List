import React from 'react';

import './todo-list-item.styles.scss';

const TodoListItem = ({ label, important = false }) => {
    const styleList = {
        color: important ? 'red' : 'black',
        fontWeight: important ? '800' : '400'
        
    };
    return(
        <div>
              <span className='todo-list-item' style={styleList}>{ label }</span>
    <button type='button' className='btn btn-info '><i className='fa fa-exclamation' /></button> 
    <button type='button' className='btn btn-danger'><i className='fa fa-trash-o' /></button>   
    
        </div>
    );
};

export default TodoListItem;