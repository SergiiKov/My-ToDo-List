import React from 'react';

const TodoListItem = ({label, important = false}) => {
    const styleList = {
        color: important ? 'red' : 'black'
    };
    return(
    <span style={styleList}>{ label}</span>
    );
};

export default TodoListItem;