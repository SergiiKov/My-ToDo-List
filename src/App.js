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
           this.createTodoItem('drinkc koffe'),
           this.createTodoItem('learn react'),
        ]
    };

createTodoItem (label) {
    return{
        label,
        import:false,
        done: false,
        id: this.maxId++  
    }
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
                };
        });
    };

    addItem = () =>{
        const newItem =  this.createTodoItem(Text);
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

    onToggleImportant = (id) =>{
        this.setState(({todoData})=>{
            return {
             todoData: this.toggleProperty(todoData, id, 'important')
            };
         });
    };

toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id===id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1) 
        ]; 
};

onToggleDone = (id) =>{
    this.setState(({todoData})=>{
        return {
            todoData: this.toggleProperty(todoData, id, 'done')
        };
    });
};

    render(){
      const  doneCount = this.state.todoData.filter((el)=>el.done).length;
      const  todoCount = this.state.todoData.length - doneCount;
        return(
            <div className='container'>
           
            <AppHeader toDo={todoCount} done={doneCount} />
            <div className='d-flex'> 
            <SerchPanel />
            <ItemStatusFilter />
            </div>
            <TodoList 
                todos={this.state.todoData}
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
            />
            <ItemAddForm addItem={this.addItem}/>
        </div>  
        );
    }
};

export default App;
