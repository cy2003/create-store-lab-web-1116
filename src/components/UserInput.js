import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      userName: "",
      hometown: ""
    }
  }
  handleUserName(event){
    this.setState({
      userName: event.target.value
    })
  }

  handleHometown(event){
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit(){
    this.props.store.dispatch({type: 'ADD_USER', payload: this.state})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>User Name</label>
          <input type="text" value={this.state.userName} onChange={this.handleUserName.bind(this)}/>
          <label>Hometown</label>
          <input type="text" value={this.state.hometown} onChange={this.handleHometown.bind(this)}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default UserInput;
