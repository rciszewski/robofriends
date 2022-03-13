import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBar from './SearchBar';



class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    })

    return (
      <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBar searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
 

export default App;