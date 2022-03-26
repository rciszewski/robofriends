import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className='bg-light-green dib tc br3 bw2 shadow-5 pa3 ma2 grow'>
      <img alt="robot" src={`https://robohash.org/${id}?200x200`}></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
} 

export default Card;