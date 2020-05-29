import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return(
        <div>
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    </div>
    );
}

const AppHeader = () => {
    return(
        <div>
             <h1>My to do list</h1> 
        </div>
    );
}

const SerchPanel = () => {
    return(
        <input placeholder='serch' />
    );
}

const App = () => {
    return(
        <div>
        <AppHeader />
        <SerchPanel />
        <TodoList />
    </div>  
    );
}


ReactDOM.render(<App />, document.getElementById('root'));