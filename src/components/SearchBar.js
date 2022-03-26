import React from 'react';

const SearchBar = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input 
      className='pa3 ba b--green bg-lightest-blue br3 bw2'
      type='search' 
      placeholder='search robots'
      onChange={searchChange}
      />
    </div>
  );
}

export default SearchBar;