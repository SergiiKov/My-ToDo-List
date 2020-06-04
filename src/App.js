import React from 'react';

//test
//test 2
//test 3
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
        term:'',
        filter: 'all'
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
onFilterChange = (filter) =>{
    this.setState({filter});
    }
search(items, term){
    if (term.length === 0) {
        return items;
    }
return items.filter((item)=>{
    return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
})
}
filter(items, filter) {
    switch(filter) {
        case 'all': return items;
        case 'active': return items.filter((item)=>!item.done);
        case 'done' : return items.filter((item)=>item.done);
        default:
           return items;
    }
}

    render(){
        const { todoData, term, filter} =this.state;
        const visibleItems = this.filter(this.search(todoData, term),filter) ;
      const  doneCount = this.state.todoData.filter((el)=>el.done).length;
      const  todoCount = this.state.todoData.length - doneCount;
        return(
            <div className='container'>
           
            <AppHeader toDo={todoCount} done={doneCount} />
            <div className='d-flex'> 
            <SerchPanel onSercheChange={this.onSercheChange}/>
            <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
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
