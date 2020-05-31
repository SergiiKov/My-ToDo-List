import React from 'react';

import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SerchPanel from './components/serch-panel';
import ItemStatusFilter from './components/item-status-filter';
import ItemAddForm from './components/item-add-form';

class App extends React.Component {
    maxId= 100;
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
            ...todoData.slice(0, idx),
            ...todoData.slice(idx + 1) 
        ];
        return {
            todoData: newArray
        }
        });
    };

    addItem = () =>{
        const newItem = {
            label:Text,
            import:false,
            id: this.maxId++
        };
        this.setState (({todoData}) =>{
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData:newArr
            };
        }); 
    }

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
            <ItemAddForm addItem={this.addItem}/>
        </div>  
        );
    }
}

export default App;
