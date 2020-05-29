import React from 'react';

const ItemStatusFilter = () =>{
    return(
        <div className='btn-group ml-4 mb-2'>
            <button type='button' className='btn btn-info'>All</button>
            <button type='button' className='btn btn-outline-secondary'>Active</button>
            <button type='button' className='btn btn-outline-secondary'>Done</button>
        </div>
    );
}

export default ItemStatusFilter;