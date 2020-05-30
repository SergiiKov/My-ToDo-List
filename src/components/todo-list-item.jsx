import React from 'react';

import './todo-list-item.style.scss';

class TodoListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            done: false  
        };

        this.onLabelClick = () => {
           this.setState({
               done:true 
           });
        }
    }
   
    render () 
        {
            const { done } = this.state;
            const { label, important = false } = this.props;
            let classNames = 'todo-list-item';
                if (done) {
                    classNames += ' done';
                }

            const styleList = {
                color: important ? 'red' : 'black',
                fontWeight: important ? '800' : '400'   
            };
        
            return(
                <div className=''>
                      <span 
                        className={classNames}
                        style={styleList} 
                        onClick={this.onLabelClick}>
                            { label }
                      </span>
            <button type='button' className='btn btn-info mx-2'><i className='fa fa-exclamation' /></button> 
            <button type='button' className='btn btn-danger'><i className='fa fa-trash-o' /></button>   
            
                </div>
            );
        };
    }

export default TodoListItem;