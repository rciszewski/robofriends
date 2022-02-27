import React from 'react';

const SearchBar = () => {
  return (
    <div className='pa2'>
      <input 
      className='pa3 ba b--green bg-lightest-blue'
      type='search' 
      placeholder='search robots'
      />
    </div>
  );
}

export default SearchBar;