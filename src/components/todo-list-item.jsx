import React from 'react';

import './todo-list-item.style.scss';

class TodoListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            done: false,
            important: false  
        };

        this.onLabelClick = () => {
           this.setState(({done})=>{
               return {
                   done: !done
               }
           });
        }
        this.onMarkImportant =() => {
            this.setState((state)=>{
                return {
                    important: !state.important  
                }
            });
        };
    }
   
    render () 
        {
            const { done, important } = this.state;
            const { label, onDeleted } = this.props;
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
                        onClick={this.onLabelClick}>
                            { label }
                      </span>
            <button onClick={this.onMarkImportant} type='button' className='btn btn-info mx-2'><i className='fa fa-exclamation' /></button> 
            <button onClick={onDeleted} type='button' className='btn btn-danger'><i className='fa fa-trash-o' /></button>   
            
                </div>
            );
        };
    }

export default TodoListItem;