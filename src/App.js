import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBar from './SearchBar';



const App = () => {
  return (
    <div className='tc'>
      <h1>Robofriends</h1>
      <SearchBar />
      <CardList robots={robots} />
    </div>
  );
}

export default App;