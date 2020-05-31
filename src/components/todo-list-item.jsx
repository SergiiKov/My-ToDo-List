import React from 'react';

import './todo-list-item.style.scss';

class TodoListItem extends React.Component {
    
    render () 
        {
           
            const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;
            let classNamesStyle = 'todo-list-item';
                if (done) {
                    classNamesStyle += ' done';
                }
                if (important) {
                    classNamesStyle += ' important';
                }

            return(
                <div className=''>
                      <span 
                        className={classNamesStyle}
                        onClick={onToggleDone}>
                            { label }
                      </span>
            <button onClick={onToggleImportant} type='button' className='btn btn-info mx-2'><i className='fa fa-exclamation' /></button> 
            <button onClick={onDeleted} type='button' className='btn btn-danger'><i className='fa fa-trash-o' /></button>   
            
                </div>
            );
        };
    }

export default TodoListItem;