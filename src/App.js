import React from 'react';

import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SerchPanel from './components/serch-panel';
import ItemStatusFilter from './components/item-status-filter';

class App extends React.Component {
    state = {
         todoData: [
            { label:'Build App', important: true, id: 1 },
            { label:'Learn React', important: false, id: 2 }
        ]
    };

    deleteItem = (id) =>{
        this.setState(({todoData})=>{
        const idx = todoData.findIndex((el) => el.id===id);
        const newArray = [
            ...todoData.splice(0, idx),
            ...todoData.splice(idx + 1) 
        ];
        return {
            todoData: newArray
        }
        });
    };

    render(){
        return(
            <div className='container'>
                <span>{ (new Date()).toString() }</span>
            <AppHeader />
            <SerchPanel />
            <ItemStatusFilter />
            <TodoList 
                todos={this.state.todoData}
                onDeleted={this.deleteItem}
            />
        </div>  
        );
    }
}

export default App;
