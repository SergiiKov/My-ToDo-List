import React from 'react';

import './item-add-form.styles.scss';

class ItemAddForm extends React.Component {

    state ={
        label: ''
    };

    onlabelChange = (e) =>{
this.setState({
    label: e.target.value
})
    };

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addItem(this.state.label)
        this.setState({label:''})
            };

    render () 
    {
        return (

            <form className='item-add-form ml-4 mt-2' onSubmit={this.onSubmit}>
                <input  type='text' 
                        className='form-control' 
                        onChange={this.onlabelChange} 
                        placeholder='What need to be done'
                        value={this.state.label} />
                <button className='btn btn-outline-secondary mt-2'>Add item</button>
            </form>
        );
    }
}

export default ItemAddForm;