import React from 'react';

class SerchPanel extends React.Component {
    state = {
        term:''
    }
    onSercheChange = (e) =>{
const term = e.target.value;
this.setState({term});
this.props.onSercheChange(term);
    }

    render() {
        return(
            <input className='form-control mb-3 ml-4' 
            placeholder='serch'
            value={this.state.term}
            onChange={this.onSercheChange} />
        );
    }
  
}

export default SerchPanel;