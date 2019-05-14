import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      name: '',
      picture: ''
    }
  }

  updatePicture = (value) => {
    // console.log(value)
    this.setState({picture: value})
  }

  updateName = (value) =>{
    this.setState({name: value})
  }

  addFriend = (name, picture) =>{

    let newFriend = {
      name,
      picture
    }
    let friendArray = this.state.friends

    friendArray.push(newFriend)

    this.setState({friends: friendArray})
    this.setState({picture: ''})
    this.setState({name: ''})

    console.log(this.state.friends)
  }

  render(){

    const friends = this.state.friends.map((friend)=>{
      return <div key='friendsList'>
        <img src= {friend.picture} width='100px' height='100px'></img>
        <span>{friend.name}</span>
      </div>
    }
    )

    return (
      <div>
        <span>Picture:</span>
        <input onChange={(e)=>this.updatePicture(e.target.value)}></input>
        <span>Name:</span>
        <input onChange={(e)=>this.updateName(e.target.value)}></input>
        <button onClick={()=>this.addFriend(this.state.name, this.state.picture)}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
