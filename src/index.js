import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SerchPanel from './components/serch-panel';

const App = () => {
    const todoData = [
        { label:'Build App', important: true, id: 1 },
        { label:'Learn React', important: false, id: 2 }
    ];

    return(
        <div>
            <span>{ (new Date()).toString() }</span>
        <AppHeader />
        <SerchPanel />
        <TodoList todos={todoData}/>
    </div>  
    );
}


ReactDOM.render(<App />, document.getElementById('root'));