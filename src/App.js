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
        ],
        term:''
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

    addItem = (Text) =>{
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
onSercheChange = (term) =>{
this.setState({term});
}
search(items, term){
    if (term.length === 0) {
        return items;
    }
return items.filter((item)=>{
    return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
})
}
    render(){
        const { todoData, term} =this.state;
        const visibleItems = this.search(todoData, term);
      const  doneCount = this.state.todoData.filter((el)=>el.done).length;
      const  todoCount = this.state.todoData.length - doneCount;
        return(
            <div className='container'>
           
            <AppHeader toDo={todoCount} done={doneCount} />
            <div className='d-flex'> 
            <SerchPanel onSercheChange={this.onSercheChange}/>
            <ItemStatusFilter />
            </div>
            <TodoList 
                todos={visibleItems}
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
