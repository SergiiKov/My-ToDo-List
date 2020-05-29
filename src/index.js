import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SerchPanel from './components/serch-panel';




const App = () => {
    return(
        <div>
            <span>{ (new Date()).toString() }</span>
        <AppHeader />
        <SerchPanel />
        <TodoList />
    </div>  
    );
}


ReactDOM.render(<App />, document.getElementById('root'));