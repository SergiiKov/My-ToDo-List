import React from 'react';

import './item-add-form.styles.scss';

class ItemAddForm extends React.Component {
    render () 
    {
        return (
            <div className='item-add-form'>
                <button onClick={()=> this.props.addItem()} className='btn btn-outline-secondary ml-4 mt-2'>Add item</button>
            </div>
        )
    }
}

export default ItemAddForm;