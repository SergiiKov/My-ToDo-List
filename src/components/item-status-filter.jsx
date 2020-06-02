import React from 'react';

class ItemStatusFilter extends React.Component {
    buttons = [
        { name:'all', label:'All'},
        { name:'active', label:'Active'},
        { name:'done', label:'Done'}
    ];

    render() {
        const { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(({name, label})=>{
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
        return(<button type='button' key={name} onClick={()=>onFilterChange(name)} className={`btn ${clazz}`}>{label}</button>)
        })
        return(
            <div className='btn-group ml-4 mb-2'>
              {buttons}
            </div>
        );  
    }
}


export default ItemStatusFilter;