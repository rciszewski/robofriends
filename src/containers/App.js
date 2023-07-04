import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import './App.css'



class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    console.log(this.props.store.getState());
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
   const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(robots.length === 0){
      return <h1 className='tc f1'>Loading...</h1>
    } else {
    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBar searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={ filteredRobots } />
        </Scroll>
      </div>
    );
    }
  }
}

 

export default App;